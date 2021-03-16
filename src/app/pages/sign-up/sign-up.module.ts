import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureModule } from '../../components/profile-picture/profile-picture.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbMenuModule,  NbUserModule,
          NbCardModule, NbButtonModule,
          NbSelectModule, NbRadioModule, NbDialogModule,
          NbSpinnerModule, NbStepperModule, NbIconModule, NbToastrModule  } from '@nebular/theme';

@NgModule({
  declarations: [ SignUpComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfilePictureModule,
    NbMenuModule,
    NbUserModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule,
    NbDialogModule.forChild(),
    NbSpinnerModule,
    NbStepperModule,
    NbIconModule,
    NbToastrModule.forRoot(),
  ],
  exports: [ SignUpComponent ],
})
export class SignUpModule { }
