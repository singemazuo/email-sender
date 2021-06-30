import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatFormFieldControl } from '@angular/material';
import { Receiver } from '../models/receiver.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  dataSource = new Array<Receiver>();
  min = 6;
  max = 30;

  constructor() { }

  ngOnInit() {

  }

}
