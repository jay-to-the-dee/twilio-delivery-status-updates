# twilio-delivery-status-updates
SocketIO, SPA server &amp; REST backend to be used in conjuction twilio-delivery-status-updates-frontend

To run:

 - Download and compile the Vue `twilio-delivery-status-updates-frontend` with `npm run build`
 - Start a ngrok instance with `ngrok http 3000` so that Twilio can externally reach this server with it's SMS status callbacks
 - `npm start` to get the whole thing runnng and navigate to your ngrok tunnel address in your browser :)
 
