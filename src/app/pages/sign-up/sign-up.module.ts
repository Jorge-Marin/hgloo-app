import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureModule } from '../../components/profile-picture/profile-picture.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfilePictureModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SignUpModule { }
