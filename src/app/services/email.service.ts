import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Receiver } from '../models/receiver.interface';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) {
  }

  send(receivers:Array<Receiver>){
    receivers.forEach(x => {
      emailjs.send(environment.emailjsServiceId, environment.emailjsTemplateId, {
        position: x.position,
        subject: x.subject,
        email: x.email,
        company: x.company
      }, environment.emailjsUserId).then(response => {
        console.log(response);
      });
    });
  }
}
