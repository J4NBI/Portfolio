'use server'

import { transporter } from "./email-config";


export const sendEmail = async (options) => {
    console.log(options);
    try {
        const mailOptions = {
            from: 'jan.bihl@gmx.de', // Sender address
            to: 'jan.bihl@gmx.de', // Recipient address
            subject: `Email from ${options.name} ${options.email}`, // Email subject
            html: `<h1> HELLO WORLD </h1><p>${options.message}</p>` // Email content (HTML)
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

