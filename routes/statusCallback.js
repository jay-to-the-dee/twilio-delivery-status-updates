const io = require('socket.io')(3001, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  }
  )
  

module.exports = (req, res) => {
  const { MessageSid, MessageStatus } = req.body;

  console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
  io.emit('SmsStatusUpdate', { MessageSid, MessageStatus });

  res.sendStatus(200);
};
