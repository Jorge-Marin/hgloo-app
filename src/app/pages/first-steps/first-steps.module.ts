import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbStepperModule, NbCardModule, NbButtonModule } from '@nebular/theme';
import { FirstStepsComponent } from './first-steps.component';

@NgModule({
  declarations: [ FirstStepsComponent ],
  imports: [
    CommonModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
  ],
  exports: [ FirstStepsComponent ],
})
export class FirstStepsModule { }
