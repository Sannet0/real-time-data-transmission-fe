import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'real-time-date-transmission';
  currentMessageName = '';
  messages: any = {};
  messagesIds: string[] = [];

  constructor(private readonly messageService: MessageService, private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const eventSource = new EventSource(environment.apiUrl);

    eventSource.onmessage = (value) => {
      const { data } = value;
      const message = JSON.parse(data);
      this.messages[message.id] = message.message;
      this.messagesIds = Object.keys(this.messages);
      this.cdr.detectChanges();
    }
  }

  addNewMessage(): void {
    const trimmedMessage = this.currentMessageName.trim()
    if (trimmedMessage) {
      this.messageService.addNewMessage(trimmedMessage).subscribe();
    }
    this.currentMessageName = '';
  }
}
