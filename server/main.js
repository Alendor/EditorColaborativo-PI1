var express = require('express');
var jf = require("jsonfile");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = process.env.PORT || 5000
//app.set('port', (process.env.PORT || 5000));


var estructura;
var jsonPath = __dirname + '/estructura.json';

function writeJSONFile( estructura){
    return new Promise((resolve, reject) => {
        jf.writeFile(jsonPath, estructura, function (err) {
            try {
                resolve()
            } catch (err) {
                reject(err)
            }
        });
    });
}

/*readJSONFile("")
.then(function(ll){
    var li = ll;
})
.catch()*/

function readJSONFile(jsonPath){
    return new Promise((resolve, reject) => {
        jf.readFile(jsonPath, function(err, estructura) {
            try {
                resolve(estructura);
            } catch (err) {
                reject(err);
            }
        })
    });
}

var messages = [] 
// [{
//     id: 1,
//     text: "Hola soy mensaje",
//     author: "Sebastian O"
// }]

app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send("hola mundo");
});
  
io.on('connection', function(socket){
    
    console.log("Alguien se ha conectado!");
    
    readJSONFile(jsonPath)
    .then(estructuraJSON => {
       // estructuraJSON.eventos[0]=""; 
        //writeJSONFile(estructuraJSON); 
        
       messages.push(estructuraJSON);
        //console.log(messages);
    })
    .then(noCare => {
        
    socket.emit('messages', messages);
    socket.on('new-message', function(data){
    //messages.push(data);
    io.sockets.emit('messages', messages);// avisa a todos los sockets sobre el mensaje
    }); 
    })
    
    .catch(error => {
        console.log("error");
    })

});      
 

server.listen(port, function(){
    console.log("servidor corriendo  8084")
});         
 