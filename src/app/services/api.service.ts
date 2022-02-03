import { Injectable } from '@angular/core'
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) {
  }

  getMessage(): Observable<any> {
    return this.httpService.get('');
  }

  addNewMessage(message: string): Observable<any>  {
    return this.httpService.post('', { message });
  }
}
