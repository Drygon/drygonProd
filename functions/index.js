const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config();
const nodemailer = require('nodemailer');

admin.initializeApp(config.firebase);

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendEmailConfirmation = functions.database.ref('/messages/{uId}').onCreate(event => {
  const snapshot = event.data;
  const message = snapshot.val();  
  
  const mailOptions = {
    from: '<noreply@firebase.com>',
    to: 'drygon.web@gmail.com , drygoninc@gmail.com',
    subject: 'new message received',
    text: JSON.stringify(message)
  };   
   
    return mailTransport.sendMail(mailOptions)
    .then(() => {console.log('Message confirmation email sent');
   
});
});

exports.sendTransmittalConfirmation = functions.database.ref('/transmittals/{uId}').onCreate(event => {
  const transmittal = event.data.val();  
 
  const mailOptions = {
    from: '<noreply@firebase.com>',
    to: 'drygon.web@gmail.com, drygoninc@gmail.com',
    subject: 'new transmittal received',
    text: JSON.stringify(transmittal)
  };   
   
    return mailTransport.sendMail(mailOptions)
    .then(() => {console.log('Transmittal confirmation email sent');
   
});
});