var socket = io.connect(
    {'forceNew': true});

 socket.on('messages', function(data){

    //console.log(data);   
    render(data.value);   
})    

function render(data){
    var html = data.map(function(elem, index){
        return(`<div>   
         <strong>${elem}</strong>:
         <em>${elem.nombre_obra}</em>
        </div>`);
    }).join(" ");
    console.log(data);
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