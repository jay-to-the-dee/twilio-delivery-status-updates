const express = require("express");

module.exports = (server) => {
  const io = require("./io")(server);

  const router = express.Router();
  router.post("/sendSMS", require("./sendSMS"));

  router.post("/statusCallback", (req, res) => {
    const { MessageSid, MessageStatus } = req.body;

    console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
    io.emit("SmsStatusUpdate", { MessageSid, MessageStatus });

    res.sendStatus(200);
  });

  return router;
};
