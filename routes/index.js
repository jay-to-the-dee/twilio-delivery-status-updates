const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works!');
});

router.get('/sendSMS', require("./sendSMS") );

router.post('/statusCallback', require("./statusCallback") );


module.exports = router;
