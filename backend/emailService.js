const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'jaganjeyaraman@gmail.com', 
        pass: 'xyww fokb hjjy rlab'  
    }
});

// Function to send email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'jaganjeyaraman@gmail.com', 
        to: to, 
        subject: subject, 
        text: text 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

module.exports = sendEmail;
