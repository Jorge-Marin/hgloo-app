import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule,  NbUserModule,
         NbCardModule, NbButtonModule,
         NbSelectModule, NbRadioModule, NbDialogModule,
         NbSpinnerModule, NbStepperModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirstStepsModule } from '../pages/first-steps/first-steps.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    FormsModule,
    SignUpModule,
    FirstStepsModule,
    NbCardModule,
    NbUserModule,
  ],
  declarations: [
    PagesComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PagesModule {
}
