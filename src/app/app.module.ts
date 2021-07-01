import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { HomeComponent } from './home/home.component';
import { CreateReceiverDialogComponent } from './home/create-receiver-dialog/create-receiver-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateReceiverDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateReceiverDialogComponent
  ]
})
export class AppModule { }
