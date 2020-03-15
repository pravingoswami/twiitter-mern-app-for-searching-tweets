const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const port = 3023
const app = express();
const cors = require('cors')


const server = http.createServer(app);
const io = socketio(server);

app.use(cors())
app.use(bodyParser.json());


require('./config/routes')(app, io);

server.listen(port, () => {
    console.log('listening on port', port)
});