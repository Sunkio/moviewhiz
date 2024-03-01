import * as dotenv from 'dotenv';

export default async function (req, res) {
  //require('dotenv').config();
    dotenv.config();
  let nodemailer = require('nodemailer');
  const PASSWORD = process.env.EMAIL_PW;
  const USER = process.env.EMAIL_USER;
  const EMAIL_TO = process.env.EMAIL_TO;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.privateemail.com",
    auth: {
      user: USER,
      pass: PASSWORD,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailData = {
    from: USER,
    to: EMAIL_TO,
    subject: `MovieWhiz Contact-Form Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
   }

 await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
        res.status(200).json({ message: 'Done!' })
      }
    });
  });
  /* transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info.response)
       res.status(200).json({ message: 'Done!' })
    /!* if (res) {
       res.status(200)
     }*!/
  })*/
}

/*
export const config = {
  api: {
    externalResolver: true,
  },
}*/


