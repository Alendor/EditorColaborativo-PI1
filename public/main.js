var socket = io.connect({'forceNew': true});

 socket.on('messages', function(data){

    console.log(data);   
    render(data);   
})    

function render(data){

    var html = data.map(function(elem, index){
        return(`<div>   
         <strong>${elem.nombre_obra }</strong>
         </br></br> 
         <textarea rows="20" cols="50">
            ${JSON.stringify(elem)}
         </textarea>
        
        </div>`);
    }).join(" ");
    //console.log(data);
    
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
    var payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    
    };

    socket.emit('new-message',payload);
    return false;

}