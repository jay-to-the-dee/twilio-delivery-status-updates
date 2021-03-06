require("dotenv").config(); //Put secrets, FROM_NUMBER & CALLBACK_BASE in .env

const express = require("express");
const app = express();

//Prevents CORS from stopping the show if the frontend is hosted separately to the backend (useful in the frontend development in particular)
const cors = require("cors");
app.use(cors());

//We need to parse both incoming JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start server first, so we get a server object we can pass to SocketIO
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

const io = require("./setupSocket.io")(server); //Set up SocketIO on this server also
//Assign API & SocketIO callback routes
app.use("/", require("./routes/index")(io) );
//Assign static file serving for Vue frontend serving
app.use("/", express.static("../twilio-delivery-status-updates-frontend/dist"));
