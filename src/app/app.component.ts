import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Manager } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'real-time-date-transmission';
  currentMessageName = '';
  messages: string[] = [];

  manager = new Manager(environment.wsUrl);
  socket = this.manager.socket("/");


  ngOnInit() {
    this.socket.on('msgToClient', (message) => {
      this.messages.push(message);
    })
  }

  addNewMessage(): void {
    const trimmedMessage = this.currentMessageName.trim()
    if (trimmedMessage) {
      this.socket.emit('msgToServer', trimmedMessage);
    }
    this.currentMessageName = '';
  }
}
