var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages =[{
    id: 1,
    text: "Hola soy mensaje",
    autor: "Sebastian O"
}]

app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send("hola mundo");
 
});
  
io.on('connection', function(socket){
    
    console.log("Alguien se ha conectado!");
    socket.emit('messages', messages);
    socket.on('new-message', function(data){
        messages.push(data);
    }); 

});      
 
server.listen(8084, function(){

    console.log("servidor corriendo  8084")
});         
 