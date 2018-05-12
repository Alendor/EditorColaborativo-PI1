var express = require('express');
var jf = require("jsonfile");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = process.env.PORT || 5000
//app.set('port', (process.env.PORT || 5000));
const mongoose = require('mongoose');
const config=require('../config/conexion');
//app.use(express.static('public'));
const pa = require('../models/partitura');//  importar modelo
var bodyParser = require('body-parser');
var cors = require('cors');


app.use(cors()) 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var estructura;
// var jsonPath = __dirname + '/estructura.json';

// function writeJSONFile( estructura){
//     return new Promise((resolve, reject) => {
//         jf.writeFile(jsonPath, estructura, function (err) {
//             try {
//                 resolve()
//             } catch (err) {
//                 reject(err)
//             }
//         });
//     });
// }

mongoose.connect(config.dbMongo, (err, res) => {
    if (err) {
        return console.log(`Error al conectarse a la base de datos: ${err}`);
    } else {
        console.log("conexion establecida");
    }
    app.listen(config.port, () => {
        console.log(`API corriendo por el puerto: ${config.port}`);
    })
});

/*readJSONFile("")
.then(function(ll){
    var li = ll;
})
.catch()*/

// function readJSONFile(jsonPath){
//     return new Promise((resolve, reject) => {
//         jf.readFile(jsonPath, function(err, estructura) {
//             try {
//                 resolve(estructura);
//             } catch (err) {
//                 reject(err);
//             }
//         })
//     });
// }

var messages = [] 

//messages= partituraModel.find({ name: "sara" });
// [{
//     id: 1,
//     text: "Hola soy mensaje",
//     author: "Sebastian O"
// }]


// readJSONFile(jsonPath)
// .then(estructuraJSON => {
//    // estructuraJSON.eventos[0]=""; 
//     //writeJSONFile(estructuraJSON); 
//     messages = estructuraJSON;
//    //messages.push(estructuraJSON);
//     //console.log(messages);
// })
// .then(noCare => {
    
 
// })

// .catch(error => {
//     console.log("error");
// })


// app.get('/', function(req, res){
//     res.status(200).send("hola mundo");
// }); 


// busco en mongodb
pa.find((err, contenido)=>{
    // var responseHomes = {
    //     agency:agency,
    //     homes:[]
    // }  
    //var callback;
    if(err){ // en caso de error retorno  1 y el error
        //callback(1,err);
        console.log("error de consulta");
    }else if(contenido.length == 0){ // en caso de que la consulta sea vacia retorno 0 y null el dato
        //callback(0,messages);
        console.log("consulta vacia");
    }else{ // siendo positiva la consulta retorno el array
        
        // procedemos a calcular el totalAmount e insertarlo en el JSON de respuesta                
        // homes.forEach(function(element) {
        //    element.totalAmount=days*element.pricePerNight;              
        // }); 
        // construimos el JSON de respuesta   
        console.log("consulta exitosa");    
        messages = contenido;
        //console.log(messages[1].nombre_obra);
        //callback(0,m);
    }        
});
    
    
  
io.on('connection', function(socket){
    //socket.emit('hello', {greeting:'hello'});

    socket.emit('messages', messages);
    socket.on('new-message', function(data){
        console.log(data);
        
        pa.find((err, contenido)=>{
            if(err){
                console.log("error de consulta");
            }else if(contenido.length == 0){
                console.log("consulta vacia");
            }else{    
                console.log("consulta exitosa");    
                messages = contenido;
            }
        });
    //messages.splice(0,1,data.text);
    io.sockets.emit('messages', messages);// avisa a todos los sockets sobre el mensaje
    }); 
});      
 

server.listen(port, function(){
    console.log("servidor corriendo  8084")
});         
 