import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NbDialogService } from '@nebular/theme';
import { terms } from '../../utilities/terms-and-conditions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
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

export class SignUpComponent implements OnInit {
  show = [ { show: true }, { show: false }, { show: false } ];
  showForm: boolean = false;
  currentIndex: number = 0;
  termsAndConditions = terms;
  signUpForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required ],
    lastname: ['', Validators.required],
    phone: [ '' , Validators.required],
    email: ['', Validators.required],
    password: [ '', Validators.required ],
    confirmPassword: [ '', Validators.required],
    country: [ '', Validators.required],
    province: [ '', Validators.required],
    city: [ '', Validators.required],
    address: [ '', Validators.required],
  });

  constructor( private formBuilder: FormBuilder,
               private dialogService: NbDialogService,
               private auth: AuthService ) { }

  ngOnInit(): void {
    this.showForm = true;
  }

  toggle() {
    this.showForm = !this.showForm;
    this.delay( 300 );
  }

  get stateName() {
    return this.showForm ? 'show' : 'hide';
  }

  get name() { return this.signUpForm.get('name'); }
  get lastname() { return this.signUpForm.get('lastname'); }
  get phone() { return this.signUpForm.get('phone'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }
  get country() { return this.signUpForm.get('country'); }
  get province() { return this.signUpForm.get('province'); }
  get city() { return this.signUpForm.get('city'); }
  get address() { return this.signUpForm.get('address'); }

  saveUser() {
    if ( this.signUpForm.valid ) {
      this.auth.signUp( this.email.value, this.password.value ).then( res => {
        const user = this.signUpForm.value;
        user['idUsuario'] = res.uid;
      });
    }
  }

  delay( ms: number) {
    setTimeout( ( ) => {
      this.showForm = !this.showForm;
      this.show[ this.currentIndex ].show = !this.show[ this.currentIndex ].show;
      this.currentIndex++;
      this.show[ this.currentIndex ].show = !this.show[ this.currentIndex ].show;
    } , ms );
  }

  setImage( image ) {

  }   openModal(modal: any ) {
    this.dialogService.open(modal, { hasScroll: true});
  }
}
