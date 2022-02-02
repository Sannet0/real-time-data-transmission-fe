import { Injectable } from '@angular/core'
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) {
  }

  addNewMessage(message: string) {
    return this.httpService.get('');
  }
}
