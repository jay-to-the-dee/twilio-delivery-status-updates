require("dotenv").config();

const http = require("http");
const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("../twilio-delivery-status-updates-frontend/dist"));

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

app.use("/", require("./routes/index")(server) );