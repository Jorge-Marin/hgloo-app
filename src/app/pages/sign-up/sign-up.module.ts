import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from '../../components/profile-picture/profile-picture.component';

@NgModule({
  declarations: [ ProfilePictureComponent, ],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SignUpModule { }
