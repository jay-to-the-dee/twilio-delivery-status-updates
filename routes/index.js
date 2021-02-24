const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("home");
// });

router.post("/sendSMS", require("./sendSMS"));

router.post("/statusCallback", require("./statusCallback"));

module.exports = router;
