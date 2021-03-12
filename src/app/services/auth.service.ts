import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localStorage = window.localStorage;

  constructor( private fireAuth: AngularFireAuth ) { }

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
}
