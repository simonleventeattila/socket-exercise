
//const socket = require('engine.io');
var express = require('express');
var app = express();

app.use(express.static('public'));
//app.use(express.static(__dirname + "/public/"));

var server = app.listen(3333);
console.log("Server started.....")

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnections);

function newConnections(socket){
    console.log("New connection: " + socket.id);
    socket.on("mouse",mouseMsg);;
    
    function mouseMsg(data) {
        socket.broadcast.emit("mouse", data);
        console.log(data);
    }

}