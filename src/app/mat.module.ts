import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MatModule { }
