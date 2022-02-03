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
  messages: any = {};
  messagesIds: string[] = [];

  constructor(private readonly messageService: MessageService) {
  }


  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    try {
      this.messageService.getMessage().subscribe((value: { id: string, message: string }) => {
        if(value.message) {
          this.messages[value.id] = value.message;
          this.messagesIds = Object.keys(this.messages);
        }

        this.getMessage();
      });
    } catch {
      this.getMessage();
    }
  }

  addNewMessage(): void {
    const trimmedMessage = this.currentMessageName.trim();
    if (trimmedMessage) {
      this.messageService.addNewMessage(trimmedMessage).subscribe(
        (value) => {
          this.messages[value.id] = value.message;
          this.messagesIds = Object.keys(this.messages);
        }
      );
    }
    this.currentMessageName = '';
  }
}
