// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // app.post('/submit', (req, res) => {
// //   const name = req.body.name;
// //   const email = req.body.email;
// //   const phone = req.body.phone;
// //   const msg = req.body.msg;

// //   const transporter = nodemailer.createTransport({
// //     service: 'Gmail', // Replace with your email service provider (e.g., Gmail, Yahoo, etc.)
// //     host: 465,
// //     secure: true,
// //     auth: {
// //       user: 'arjunsikchi567@gmail.com', // Replace with your email address
// //       pass: '9420384986' // Replace with your email password
// //     }
// //   });

// //   const mailOptions = {
// //     from: email,
// //     to: 'arjunsikchi567@gmail.com', // Replace with your email address
// //     subject: 'User Requirements',
// //     text: `Name: ${name}\n\nEmail: ${email}\n\n phone: ${phone}\n\nRequirnments: ${msg}`
// //   };

// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.log(error);
// //       res.send('Error sending email.');
// //     } else {
// //       console.log('Email sent: ' + info.response);
// //       res.send('Email sent successfully.');
// //     }
// //   });
// // // });
// // const form = document.getElementById('form');
// // form.addEventListener('submit', function(event)
// // {
// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //           console.log(error);
// //           res.send('Error sending email.');
// //         } else {
// //           console.log('Email sent: ' + info.response);
// //           res.send('Email sent successfully.');
// //         }
// //       });
// //     });
// // })

// const transporter = nodemailer.createTransport({
//     host: "smtp.forwardemail.net",
//     port: 465,
//     secure: true,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: 'arjunsikchi567@gmailcom',
//       pass: '9420394986'
//     }
//   });

//   async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '"Fred Foo 👻" <foo@example.com>', // sender address
//       to: "arjunsikci567@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//     //
//     // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//     //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//     //       <https://github.com/forwardemail/preview-email>
//     //
//   }
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'arjunsikchi567@gmail.com',
    pass: '9420384986'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "arjunsikchi567@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);