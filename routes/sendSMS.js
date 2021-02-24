// and set the environment variables. See http://twil.io/secure
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, CALLBACK_BASE } = process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      // body: "McAvoy or Stewart? These timelines can get so confusing.",
      body,
      from: "+1 207 337 9878",
      //  statusCallback: 'https://abc1234.free.beeceptor.com',
      statusCallback: `${CALLBACK_BASE}/statusCallback`,
      to,
    })
    .then((message) => res.json( message ));
};
