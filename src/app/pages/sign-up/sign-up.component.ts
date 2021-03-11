import { Component, OnInit } from '@angular/core';
import { trigger, state,
  style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      transition('show => hide', animate('1500ms ease-out')),
      transition('hide => show', animate('1500ms ease-in')),
    ]),
    trigger('popsecondState', [
      state('show', style({
        opacity: 1,
      })),
      state('hide',   style({
        opacity: 0,
      })),
      transition('show => hide', animate('1500ms ease-out')),
      transition('hide => show', animate('1500ms ease-in')),
    ]),
  ],
})
export class SignUpComponent implements OnInit {
  show = [ { show: true }, { show: false }, { show: false } ];
  currentIndex: number = 0;
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

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.show[ this.currentIndex ].show = !this.show[ this.currentIndex ].show;
    this.currentIndex++;
    this.show[ this.currentIndex ].show = !this.show[ this.currentIndex ].show;

  }


  get name() { return this.signUpForm.get('name') };
  get lastname() { return this.signUpForm.get('lastname') };
  get phone() { return this.signUpForm.get('phone') };
  get email() { return this.signUpForm.get('email') };
  get password() { return this.signUpForm.get('password') };
  get confirmPassword() { return this.signUpForm.get('confirmPassword') };
  get country() { return this.signUpForm.get('country') };
  get province() { return this.signUpForm.get('province') };
  get city() { return this.signUpForm.get('city') };
  get address() { return this.signUpForm.get('address') };

}
