import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { CustomInputComponent } from './custom-input/custom-input.component';
import { InputFormatorPipe } from './custom-pipes/input-formator.pipe';

@NgModule({
  declarations: [
    CustomInputComponent,
    InputFormatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomInputComponent,
    InputFormatorPipe
  ]
})
export class CustomControlModule { }
