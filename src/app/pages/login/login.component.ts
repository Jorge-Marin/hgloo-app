import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NbDialogService } from '@nebular/theme';
import { terms } from '../../utilities/terms-and-conditions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('popFirstState', [
      state('show', style({
        opacity: 1,
      })),
      state('hide',   style({
        opacity: 0,
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in')),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  user: any;
  phrases = [
    '¿Cuánto Cuesta?',
    '¡Te lo cambio!',
    '¡Te lo compro!',
    '¿Aún está \ndisponible?',
    '¿Ya lo vendió?',
    '¡Bienvenido a \nHgloo!',
   ];
  showBanner = true;
  currentPhrases = 0;
  termsAndConditions = terms;
  localStorage = window.localStorage;
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required ],
    password: ['', Validators.required],
  });

  constructor( private formBuilder: FormBuilder,
    private auth: AuthService,
    private dialogService: NbDialogService,
    private router: Router ) {
     }

  ngOnInit(): void {
    this.showBanner = true;
    setInterval( ( ) => {
      this.currentPhrases = ( this.currentPhrases !== 5 ) ? this.currentPhrases + 1 : 0;
    } , 2500 );

    this.auth.isAuthenticated().then( user => {
      if ( localStorage.getItem('token') ) {
        if ( user ) {
          user.getIdToken().then( token => {
            const tokenData = JSON.parse( localStorage.getItem('token') );
            if ( tokenData[0].token === token) {
              this.router.navigate(['/dashboard']);
            }
          });
        }
      }
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get stateName() {
    return this.showBanner ? 'show' : 'hide';
  }

  login() {
   if ( this.loginForm.valid ) {
      this.auth.login( this.email.value, this.password.value);
   }
  }
  openModal(modal: any ) {
    this.dialogService.open(modal, { hasScroll: true});
  }
}
