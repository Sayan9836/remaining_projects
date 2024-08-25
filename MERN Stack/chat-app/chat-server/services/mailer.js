const sgMail = require("@sendgrid/mail");

const SG_KEY = "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"
sgMail.setApiKey(SG_KEY);

const sendSGMail = async ({
  to,
  sender,
  subject,
  html,
  attachments,
  text,
}) => {
  try {
    // const from = "sayanmaity631@gmail.com";

    const msg = {
      to: to, // Change to your recipient
      from: sender, // Change to your verified sender
      subject: subject,
      text: "hello from sendgrid",
      html: '<h1>Hello from sengrid</h1>',
      attachments,
    };

    
    return sgMail.send(msg);
  } catch (error) {
    console.log(error,"not able to send mail");
  }
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
}
return sendSGMail(args);
};