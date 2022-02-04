import { Injectable } from '@angular/core'
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) {
  }

  connect() {
    return this.httpService.get('');
  }

  addNewMessage(message: string) {
    return this.httpService.post('', { message });
  }
}
