const jwt = require("jsonwebtoken");
const User = require("../models/user");
const filterObj = require("../utils/filterObj");
const otpGenerator = require('otp-generator')
const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET)
const crypto = require('crypto');
const otp = require("../Templates/Mail/otp");
const { promisify } = require("util");
const mailService = require("../services/mailer")
const jwtKey = process.env.JWT_SECRET;

// Resister user
exports.register = async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body;

    const filteredBody = filterObj(req.body, "firstName", "lastName", "email", "password");

    const existing_user = await User.findOne({ email: email });
    if (existing_user && existing_user.verified) {
        res.status(400).json({
            status: "error",
            message: "Email is already in use ,Please Login"
        })
    } else if (existing_user) {
        await User.findOneAndUpdate({ email: email }, filteredBody, { new: true, validateModifiedOnly: true });
        req.userId = existing_user._id;
        next();
    } else {
        const new_User = await User.create(filteredBody);
        req.userId = new_User._id;
        new_User.verified = true;
        next();
    }
}


exports.sendOTP = async (req, res, next) => {
    const { userId } = req;
    const new_otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
    });

    const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 Mins after otp is sent

    const user = await User.findByIdAndUpdate(userId, {
        otp_expiry_time: otp_expiry_time,
    });

    user.otp = new_otp.toString();

    await user.save({ new: true, validateModifiedOnly: true });

    console.log(new_otp);

    // TODO send mail
    mailService.sendEmail({
        from: "shreyanshshah242@gmail.com",
        to: user.email,
        subject: "Verification OTP",
        text: "",
        //   html: otp(user.firstName, new_otp),
        attachments: [],
    });

    res.status(200).json({
        status: "success",
        message: "OTP Sent Successfully!",
    });
};

exports.verifyOTP = async (req, res, next) => {
    const { email, otp } = req.body;
    const user = await User.findOne({
        email,
        otp_expiry_time: { $gt: Date.now() },
    });
    if (!user) {
        return res.status(400).json({
            status: "error",
            message: "Email is Invalid or OTP expired"
        })
    }
    console.log(otp);
    console.log(user.otp);
    if (!(await user.correctOTP(otp, user.otp))) {
        res.status(400).json({
            status: "error",
            message: 'OTP is incorrect'
        })
        return;
    }

    user.verified = true;
    user.otp = undefined;
    await user.save({ new: true, validateModifiedOnly: true })

    const token = signToken(user._id);

    res.status(200).json({
        status: "sucess",
        message: "OTP verified successfully",
        token,
        user_id: user._id
    })

}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            status: "error",
            message: "both email and password are required"
        })
    }
    const user = await User.findOne({ email: email }).select("+password")

    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(400).json({
            status: "error",
            message: "Email or password is incorrect"
        })
    }

    const token = signToken(user._id);

    res.status(200).json({
        status: "sucess",
        message: "Logged in successfully",
        token,
        user_id: user._id,
    })

    console.log(user._id);
    
}

exports.protected = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startswith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];


    } else if (req.cookies.jwt) {
        token = req.cokies.jwt;
    } else {
        res.status(400).json({
            status: "error",
            message: "You are not logged In! please log in to get ascess"
        })
    }

    const decoded = await promisify(jwt.verify)(token, jwtKey);

    const this_user = await User.findById(decoded.user);
    if (!this_user) {
        res.status(400).json({
            status: "error",
            message: "the user doesn't exist"
        })
    }

    if (this_user.changedPasswordAfter(decoded.iat)) {
        res.status(400).json({
            status: "error",
            message: "User recently updated password! Please logIn  again"
        })
    }

    req.user = this_user;
    next();


}

exports.forgotPassword = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.status(400).json({
            status: "error",
            message: "There is no user with given email address"
        })
        return;
    }
    const resetToken = user.createPasswordResetToken();
    const resetURL = `https://twerk.com/auth/reset-password/?code=${resetToken}`

    try {
        //TODO=> Send Email with reset URL:

        res.status(200).json({
            status: "succes",
            message: "Reset Password Link send to Email"
        })
    } catch (error) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save({ validateBeforeSave: false });

        res.status(500).json({
            status: "error",
            message: "error while sending mail Please try again Later!"
        })
    }

}

exports.ResetPassword = async (req, res, next) => {

    const hasedToken = crypto.createHash("sha256").update(req.params.tojen).digest("hex");
    const user = await user.findOne({
        passwordResetToken: hasedToken,
        passwordResetExpires: { gt: Date.now() },
    })

    if (!user) {
        res.status(400).json({
            status: "error",
            message: "Token is Invalid or Expired",
        });
        return;
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;

    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    const token = signToken(user._id);

    res.status(200).json({
        status: "sucess",
        message: "Password Reseted  successfully",
        token,
    })

}


