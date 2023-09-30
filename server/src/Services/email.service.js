const utils = require("../Utils")

const email = process.env.EMAIL;

const sendEmail = async (to, subject, text, html) => {
  try {
    const transporter = utils.email.gmailTransporter()

    const mailOptions = {
      from: email,
      to: to,
      subject: subject,
      text: text,
      html: html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
