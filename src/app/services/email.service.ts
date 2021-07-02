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

  send(receivers:Array<Receiver>, callback?: any){
    receivers.forEach((x,i) => {
      let isFullname = /^[a-zA-Z]+ [a-zA-Z]+$/.test(x.subject);
      var subject = x.subject;
      if (isFullname && x.subject.toLowerCase() !== "hiring manager") {
        subject = x.subject.split(' ')[0];
      }
      emailjs.send(environment.emailjsServiceId, environment.emailjsTemplateId, {
        position: x.position,
        subject: subject,
        email: x.email,
        company: x.company
      }, environment.emailjsUserId).then(response => {
        if(callback) callback(i == receivers.length - 1);
      });
    });
  }
}
