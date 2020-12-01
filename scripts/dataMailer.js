// JavaScript source code

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'protonmail',
    auth: {
        user: 'Comp1800D11@protonmail.com',
        pass: 'uniform'
    }
});

var mailOptions = {
    from: 'Comp1800D11@protonmail.com',
    to: 'pilot.max777@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Test Run'
};
