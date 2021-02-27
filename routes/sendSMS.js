/**
 *  Simply sends the SMS to Twilio with the appropriate account details
 *  and sets Twilio to callback back to this server (CALLBACK_BASE).
 *
 *  Callback must be accessible via the internet so localhost won't work
 *  unless you use with something like ngrok to expose it to the internet. :)
 */
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  CALLBACK_BASE,
  FROM_NUMBER,
} = process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body,
      from: FROM_NUMBER,
      statusCallback: `${CALLBACK_BASE}/statusCallback`,
      to,
    })
    .then((message) => res.json(message))
    .catch((error) => {
      console.error(JSON.stringify(error));
      res.status(error.status).send(error.moreInfo);
    });
};
