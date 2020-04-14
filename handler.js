'use strict';
const AWS = require('aws-sdk')
const SES = new AWS.SES();

const geoData = (userInfo) => {
  if(!userInfo) return 'data not found';

  const {city, region, country, ip } = userInfo

return `
City: ${city}
Region: ${region}
Country: ${country}
IP: ${ip}
`
}

function sendEmail(formData, callback) {


  const emailParams = {
    Source: 'ivor.padilla@gmail.com',
    ReplyToAddresses: [formData.email],
    Destination: { ToAddresses: ['ivor.padilla@gmail.com'] },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
${formData.message} \n\n
-----------
Name: ${formData.name}
Email: ${formData.email}
City: ${formData.userInfo.city || 'empty'}
Region: ${formData.userInfo.region || 'empty'}
Country: ${formData.userInfo.country || 'empty'}
IP: ${formData.userInfo.ip || 'empty'}
User Agent: ${formData.navigator.userAgent || 'maybe custom?'}
`,
        },
      },
      Subject: { Charset: 'UTF-8', Data: '[ivorpad.com] New Message' },
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
        'Access-Control-Allow-Origin': 'https://ivorpad.com',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};