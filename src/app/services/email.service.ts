import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Receiver } from '../models/receiver.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  send(receiver:Receiver, content: string): Observable<any>{
    return this.http.post(`${environment.emailApiURL}`,{
      user: 'singemazuo@gmail.com',
      pass: '19880620Zyb',
      to: receiver.email,
      title: `Interesting ${receiver.position}`,
      host: 'smtp.gmail.com',
      content: encodeURI(content)
    });
  }
}
