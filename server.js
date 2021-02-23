// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'McAvoy or Stewart? These timelines can get so confusing.',
         from: '+1 207 337 9878',
        //  statusCallback: 'https://abc1234.free.beeceptor.com',
         to: '+447766952599'
       })
      .then(message => console.log(message.sid));

      