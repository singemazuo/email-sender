import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MatModule { }
