//Literally just sets up the SocketIO server and makes it ready for client (browser) connections
module.exports = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(
      `socket.io connection received. Host:`,
      socket.handshake.headers.host
    );
  });

  return io;
};
