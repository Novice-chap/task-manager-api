const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ajaharvishnu@outlook.com",
    subject: "Welcome to our service. Thanks for joinning in.",
    text: `We're lucky to have you, ${name}. Please explore our app and let us know how it is.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ajaharvishnu@outlook.com",
    subject: "Sad to lose you",
    text: `Hey, ${name}, We hope you come back.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
