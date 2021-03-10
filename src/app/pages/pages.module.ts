import { NgModule } from '@angular/core';
import { NbMenuModule,  NbUserModule, NbCardModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfilePictureComponent } from '../components/profile-picture/profile-picture.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbUserModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    PagesComponent,
    NotFoundComponent,
    SignUpComponent,
    ProfilePictureComponent,
  ],
})
export class PagesModule {
}
