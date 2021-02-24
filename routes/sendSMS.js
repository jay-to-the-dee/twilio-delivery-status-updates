// and set the environment variables. See http://twil.io/secure
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, CALLBACK_BASE } = process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body,
      from: "+1 207 337 9878",
      statusCallback: `${CALLBACK_BASE}/statusCallback`,
      to,
    })
    .then((message) => res.json( message ))
    .catch((error) => {
      console.error( JSON.stringify(error) );
      res.status(error.status).send( error.moreInfo );
    });
    ;
};
