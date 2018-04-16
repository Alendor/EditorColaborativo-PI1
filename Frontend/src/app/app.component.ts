import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  text;
  
  ngOnInit(): void {
    const socket = socketIo('http://localhost:5000');
    //socket.on('hello', (data) => console.log(data));
    socket.on('messages', (data) =>  {
      this.text = data
    console.log(data);
    
    });
   
  }


  
}
