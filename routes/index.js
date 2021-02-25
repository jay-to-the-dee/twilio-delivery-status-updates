const express = require("express");

const router = express.Router();
router.post("/sendSMS", require("./sendSMS"));
router.post("/statusCallback", require("./statusCallback"));

module.exports = router;
