import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localStorage = window.localStorage;

  constructor( private fireAuth: AngularFireAuth,
               private router: Router ) { }

  signUp( email: string , password: string ): Promise <any> {
    return new Promise ( ( resolve, rejects ) => {
      this.fireAuth.createUserWithEmailAndPassword( email , password ).then( add => {
        add.user.getIdToken().then( token => {
          const user = [{
            uid: add.user.uid,
            email: add.user.email,
            token: token,
          }];
          localStorage.clear();
          localStorage.setItem('token', JSON.stringify(user));
         });

        resolve( { uid: add.user.uid });
        
      });
    });
  }

  login( email: string, password: string ): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.fireAuth.signInWithEmailAndPassword( email, password ).then( userdata => {
        userdata.user.getIdToken().then( token => {
          const user = [{
            uid: userdata.user.uid,
            email: userdata.user.email,
            token: token,
          }];
          localStorage.clear();
          localStorage.setItem('token', JSON.stringify(user));
         });
        if ( email === userdata.user.email ) {
          this.router.navigate(['/dashboard']);
        }
      });
    });
  }
  
  isAuthenticated() {
    return this.fireAuth.authState.pipe(first()).toPromise();
  }
}
