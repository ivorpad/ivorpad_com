'use strict';
const AWS = require('aws-sdk')
const SES = new AWS.SES();


function sendEmail(formData, callback) {
  const emailParams = {
    Source: 'me@ivorpad.com', // SES SENDING EMAIL
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: ['me@ivorpad.com'], // SES RECEIVING EMAIL
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${
            formData.reply_to
          }`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from your_site.com',
      },
    },
  }

  SES.sendEmail(emailParams, callback)
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function (err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};