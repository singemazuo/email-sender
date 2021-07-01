import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Receiver } from 'src/app/models/receiver.interface';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-receiver-dialog',
  templateUrl: './create-receiver-dialog.component.html',
  styleUrls: ['./create-receiver-dialog.component.less']
})
export class CreateReceiverDialogComponent implements OnInit {
  receiverForm:FormGroup;
  subjectPlaceholder = 'Hiring Manager';

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder:FormBuilder, public dialogRef: MatDialogRef<CreateReceiverDialogComponent>) { }

  ngOnInit() {
    this.receiverForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      subject: [''],
      position: ['', [
        Validators.required,
      ]],
      company: ['', [
        Validators.required
      ]]
    });
  }

  confirm(){
    if (this.receiverForm.valid) {
      this.dialogRef.close({
        email: this.receiverForm.value.email,
        position: this.receiverForm.value.position,
        subject: this.receiverForm.value.subject.length <= 0?this.subjectPlaceholder:this.receiverForm.value.subject,
        company: this.receiverForm.value.company
      });
    }else{
      this.dialogRef.close();
    }
  }

  cancel(){
    this.dialogRef.close();
  }

}
