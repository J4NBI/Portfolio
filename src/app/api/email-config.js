const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'mail.gmx.net',
    port: 587,
    secure: false, // oder 'STARTTLS'
    auth: {
      user: process.env.GMX,
      pass: process.env.GMX_PASSWORD,
    },
  });

module.exports = { transporter };