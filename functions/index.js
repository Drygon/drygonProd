const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config();
const nodemailer = require('nodemailer');

admin.initializeApp(config.firebase);

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendEmailConfirmation = functions.database.ref('/messages/{sender}').onWrite(event => {
  const snapshot = event.data;  
  const val = snapshot.val();

  const mailOptions = {
    from: '<noreply@firebase.com>',
    to: 'drygon.web@gmail.com'
  };
   
    mailOptions.subject = 'new message received';
    mailOptions.text = JSON.stringify(val);
    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('confirmation email sent');
   
});
});