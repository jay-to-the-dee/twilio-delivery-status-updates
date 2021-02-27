const express = require("express");

module.exports = (io) => {
  const router = express.Router();
  //New SMS submissions (from the browser) shall go to this endpoint & function
  router.post("/sendSMS", require("./sendSMS"));
  //Twilio will call this function back as the SMS delivery progresses
  router.post("/statusCallback", require("./statusCallback")(io));

  return router;
};
