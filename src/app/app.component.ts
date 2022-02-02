import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'real-time-date-transmission';
  currentMessageName = '';
  messages: string[] = [];

  ngOnInit(): void {
  }

  addNewMessage(): void {
    const trimmedMessage = this.currentMessageName.trim()
    if (trimmedMessage) {
      this.messages.push(trimmedMessage);
    }
    this.currentMessageName = '';
  }
}
