// const nodemailer = require('nodemailer');
// require('dotenv').config();

// //Step 1
// let transporter = nodemailer.createTransport({
//     service: 'email',
//     auth: {
//         user: 'giribabu453@gmail.com',
//         pass: 'babu453@'
//     }
// })

// //Step 2
// let mailOptions = {
//     from: 'giribabu453@gmail.com',
//     to: 'giribabu.nagipogu@solutionec.com',
//     subject:'Testing and Testing',
//     text: 'IT works'
// }

// //Step 3
// transporter.sendMail(mailOptions, function(err, data){
//     if(err) {
//         console.log('Error Occurs', err);
//     } else{
//         console.log('Email sent!!!!');
//     }

// });



var nodemailer = require("nodemailer");
// https://myaccount.google.com/lesssecureapps
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    secure:false,
    auth: {
        user: "giribabu@gmail.com",
        pass: "babu45@"
    }
});


// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Fred Foo ✔ <giribabu453@gmail.com>", // sender address
    to: "giribabu453@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: '<b>Your dreams are what define your individuality. They have the power to give you wings and make you fly high. </b> <br/> <img src="cid:unnamed" />', // html body
    attachments:[
        {
          fileName: 'sindhu.png',
          path: __dirname + '/sindhu.png',
          cid:'unnamed'
        }
      ]
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});