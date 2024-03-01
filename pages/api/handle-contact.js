import * as dotenv from 'dotenv';

  //require('dotenv').config();
  dotenv.config();
export default async function (req, res) {
  let nodemailer = require('nodemailer');
  const PASSWORD = process.env.EMAIL_PW;
  const USER = process.env.EMAIL_USER;
  const EMAIL_TO = process.env.EMAIL_TO;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
      user: USER,
      pass: PASSWORD,
    },
    secure: false,
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


    await transporter.sendMail(mailData);



  res.status(200).json({ message: 'Done!' })

/*   transporter.sendMail(mailData, function (err, info) {
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

// OLD IDEAS
/*
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});*/

/*   try {
    await transporter.sendMail(mailData);
    res.status(200).json({ message: "success" });
   } catch (err) {
    res.status (500).json({message: "an error occurred" })
    console.log(err);
   }*/
/*
 await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, response) => {
      if (err) {
        reject(err);
      } else {
        console.log(info);
        resolve(response);
      }
    });
  });*/
