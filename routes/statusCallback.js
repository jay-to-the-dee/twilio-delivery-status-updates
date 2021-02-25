const io = require('./io')(3001);

module.exports = (req, res) => {
  const { MessageSid, MessageStatus } = req.body;

  console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
  io.emit("SmsStatusUpdate", { MessageSid, MessageStatus });

  res.sendStatus(200);
};
