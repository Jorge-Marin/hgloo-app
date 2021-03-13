import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any;
  localStorage = window.localStorage;
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required ],
    password: ['', Validators.required],
  });

  constructor( private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router ) {
     }

  ngOnInit(): void {
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

  login() {
   if ( this.loginForm.valid ) {
      this.auth.login( this.email.value, this.password.value);
   }
  }
}
