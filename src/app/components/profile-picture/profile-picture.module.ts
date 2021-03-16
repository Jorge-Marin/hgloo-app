import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '@nebular/theme';
import { ProfilePictureComponent } from './profile-picture.component';

@NgModule({
  declarations: [ ProfilePictureComponent ],
  imports: [
    CommonModule,
    NbIconModule,
  ],
  exports: [ ProfilePictureComponent ],
})
export class ProfilePictureModule { }
