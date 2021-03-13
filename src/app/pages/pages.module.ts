import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule,  NbUserModule,
         NbCardModule, NbButtonModule,
         NbSelectModule, NbRadioModule, NbDialogModule,
         NbSpinnerModule, NbStepperModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfilePictureComponent } from '../components/profile-picture/profile-picture.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirstStepsComponent } from './first-steps/first-steps.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbUserModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NbRadioModule,
    NbDialogModule.forChild(),
    NbSpinnerModule,
    NbStepperModule,
  ],
  declarations: [
    PagesComponent,
    NotFoundComponent,
    SignUpComponent,
    ProfilePictureComponent,
    FirstStepsComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PagesModule {
}
