const nodemailer = require('nodemailer');
const express = require('express');

const app = express();

app.post('/send', (req,res,next) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "xKKJZx@gmail.com",
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        form: `${req.body.email}`,
        to: "xKKJZx@gmail.com",
        subject: `${req.body.subject}`,
        text: `${req.body.content}`,
        replyTo: `${req.body.email}`
    };
    transporter.sendMail(mailOptions, function(err, res) {
        if(err) {
            console.error('there was an error:', err);
        } else {
            console.log('here is the res:', res)
        }
    })
})