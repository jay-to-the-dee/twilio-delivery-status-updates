// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const callbackBase = process.env.CALLBACK_BASE;
const client = require('twilio')(accountSid, authToken);

module.exports = (req, res) => {

    client.messages
    .create({
       body: 'McAvoy or Stewart? These timelines can get so confusing.',
       from: '+1 207 337 9878',
      //  statusCallback: 'https://abc1234.free.beeceptor.com',
      statusCallback: `${callbackBase}/statusCallback`,
       to: '+447766952599'
     })
    .then(message => console.log(message.sid));

    res.send('SMS sent');
  }