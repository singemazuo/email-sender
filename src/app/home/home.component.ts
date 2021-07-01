import { ChangeDetectorRef, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatFormField, MatFormFieldControl } from '@angular/material';
import { Receiver } from '../models/receiver.interface';
import { CreateReceiverDialogComponent } from './create-receiver-dialog/create-receiver-dialog.component';
import { Constants } from "../constants/constants";
import { BehaviorSubject } from 'rxjs';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['email', 'subject', 'position', 'company'];
  panelOpenState = false;
  data = new Array<Receiver>();
  dataSource = new BehaviorSubject([]);
  min = 6;
  max = 30;

  constructor(private emailService:EmailService,private dialog: MatDialog, private cdf:ChangeDetectorRef) { }

  ngOnInit() {}

  openDialog(){
    const dialogRef = this.dialog.open(CreateReceiverDialogComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(res => {
      this.data.push(res);
      this.dataSource.next(this.data);
    });
  }

  send(){
    var rec = this.data.pop();
    this.emailService.send(rec, Constants.DEFAULT_EMAIL_CONTENT);
  }
}
