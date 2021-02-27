module.exports = (io) => { //We need the SocketIO object passing to emit updates back to the browser via SocketIO
  return (req, res) => {
    const { MessageSid, MessageStatus } = req.body;

    console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
    io.emit("SmsStatusUpdate", { MessageSid, MessageStatus }); //Emit the status update callback back to browser via SocketIO

    res.sendStatus(200);
  };
};
