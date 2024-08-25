import { User } from "../model/User.js";
// import Jwt from "jsonwebtoken";

// const SECRET_KEY = process.env.SECRET_KEY;
// const createJWT = (userId) => {
//   const token = Jwt.sign({ userId }, SECRET_KEY);
//   return token;
// };

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() == "")) {
    return res.status(404).json({
      status: "error",
      statusCode: 404,
      message: "ALL fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      status: "error",
      statusCode: 400,
      message: "User Already exists",
    });
  }

  const newUser = await User.create({
    username: username,
    email: email,
    password: password,
  });

  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "User created successfuly",
    newUser,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      status: "error",
      statusCode: 404,
      message: "ALL fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      status: "error",
      statusCode: 404,
      message: "User does not exists",
    });
  }

  const isPasswordCorrect = user.password === password;

  if (!isPasswordCorrect) {
    return res.status(400).json({
      status: "error",
      statusCode: 404,
      message: "Please enter correct password",
    });
  }

  res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "user loggedIn successfull",
    user,
  });
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "users fetched successfully",
    users,
  });
};

export { registerUser, loginUser, getAllUsers };
