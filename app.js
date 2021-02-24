const http = require("http")
const express = require("express")

const routes = require("./routes/index");

const app = express();

const cors = require('cors')
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static('../twilio-delivery-status-updates-frontend/dist'))

app.use("/", routes);

module.exports = app;
