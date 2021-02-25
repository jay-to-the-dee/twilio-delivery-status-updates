const io = require("socket.io")(3001, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`socket.io connection received. Host:`, socket.handshake.headers.host);
});

module.exports = (req, res) => {
  const { MessageSid, MessageStatus } = req.body;

  console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
  io.emit("SmsStatusUpdate", { MessageSid, MessageStatus });

  res.sendStatus(200);
};
