import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private apiService: ApiService) {
  }

  connect() {
    return this.apiService.connect();
  }

  addNewMessage(message: string) {
    return this.apiService.addNewMessage(message);
  }
}
