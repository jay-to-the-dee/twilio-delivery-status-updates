const express = require("express");

module.exports = (server) => {
  const io = require("./io")(server); //Set up SocketIO on this server also

  const router = express.Router();
  router.post("/sendSMS", require("./sendSMS")); //New SMS submissions (from the browser) shall go to this endpoint & function

  router.post("/statusCallback", (req, res) => {
    const { MessageSid, MessageStatus } = req.body;

    console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
    io.emit("SmsStatusUpdate", { MessageSid, MessageStatus }); //Emit the status update callback back to browser via SocketIO

    res.sendStatus(200);
  });

  return router;
};
