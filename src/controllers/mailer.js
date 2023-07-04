const nodemailer = require('nodemailer')

const Email = (options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
    })
    transporter.sendMail(options, (err, info) => {
        if (err) {
            return;
        }
    });
};

const sendEmail = ({ email, subject, body }) => {
    const options = {
        from:`Portfolio Contact Form<${process.env.USER}`,
        to:process.env.SEND_TO,
        subject: `${subject} - from ${email}`,
        html: `
            <p><b>${email} said:</b></p>
            <div>
            <p>${body}</p>
            </div>
        `
    }
    Email(options)
}

module.exports = {
    sendEmail
}
