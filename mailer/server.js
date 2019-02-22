const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//logging
app.use(morgan('common'));

// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'POST');
    if (req.method === 'OPTIONS') {
      return res.send(204);
    }
    next();
  });

let jsonParser = bodyParser.json();

app.post('/send', jsonParser, (req,res,next) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "xKKJZx@gmail.com",
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        form: `${req.body.email}`,
        to: "xKKJZx@gmail.com",
        subject: `${req.body.subject}`,
        text: `From: ${req.body.name}, ${req.body.content}  Reply: ${req.body.email}`,
    };
    transporter.sendMail(mailOptions, function(err, res) {
        if(err) {
            console.error('there was an error:', err);
        } else {
            console.log('here is the res:', res)
        }
    })
})

let server;

function runServer(port = process.env.PORT) {
    server = app.listen(port, () => {
        console.log(`Server is listening on PORT: ${port}`);
    })
};

function closeServer() {
    server.close(err => {
        if (err) {
            return err;
        }
    })
};

if(require.main === module) {
    runServer();
};

module.exports = {app, runServer, closeServer};
