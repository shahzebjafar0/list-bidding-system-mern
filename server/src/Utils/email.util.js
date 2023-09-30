const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const gmailTransporter = () => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: password,
            },
        });

        return transporter
    } catch (error) {
        return error
    }
}

module.exports = { gmailTransporter };