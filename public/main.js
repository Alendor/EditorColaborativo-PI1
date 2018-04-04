var socket = io.connect({'forceNew': true});

 socket.on('messages', function(data){

    //console.log(data);   
    render(data);   
})    

function render(data){
    var bandera = 0;

    var html = data.map(function(elem, index){
        return(`${JSON.stringify(elem)}`
    //     `<div>   
    //     <strong>${elem.nombre_obra }</strong>
    //     </br></br> 
    //     <textarea rows="20" cols="50">
    //        ${JSON.stringify(elem)}
    //     </textarea>
       
    //    </div>`
        );
    }).join(" ");
    document.getElementById('texarea').innerHTML = html.replace(/\\/g,"");
    // if(bandera == 0 ){
    //     document.getElementById('texarea').innerHTML = html.replace(/\\/g,"");
    //     var bandera = 1;
    // }else{
    //     document.getElementById('texarea').innerHTML = html.replace(/\\/g," ");

    // }
    //console.log(data);
    
    //document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
    var payload = {
        //author: document.getElementById('username').value,
        //text: document.getElementById('texto').value
        //text: $( "#texarea" ).val(),
        text: document.getElementById('texarea').value
    };

    console.log(payload);
    
    socket.emit('new-message',payload);
    return false;

}

function cambiaeltexto(){
 console.log($( "#texarea" ).val());

}