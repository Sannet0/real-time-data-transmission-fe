import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private apiService: ApiService) {
  }

  getMessage(): Observable<any> {
    return this.apiService.getMessage();
  }

  addNewMessage(message: string): Observable<any>  {
    return this.apiService.addNewMessage(message);
  }
}
