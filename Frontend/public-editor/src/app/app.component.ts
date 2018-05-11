import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  text = "";
  text2 = "";
  // clase1="prueba";
  // clase= {
  //  "tamano":"prueba"
  // }
  // count;
  
  id$=0;

   socket = socketIo('http://localhost:5000');
  
  
  ngOnInit(): void {
    
    //socket.on('hello', (data) => console.log(data));
    this.socket.on('messages', (data) =>  {
      
      
        // this.text =  JSON.stringify(data);
        this.text2 = data;
        console.log(data);
    
    });


  }
  consultar(id){
    this.id$=id;  
    console.log("envio!");
    console.log(id);
     this.socket.emit('new-message', id);
  }

  // elegirobra(){
  //   console.log("ddol");
  //   this.id1 = document.getElementsByName("num-coleccion").item;
    
    
  // }
  
}