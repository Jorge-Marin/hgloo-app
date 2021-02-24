import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUserService {

  constructor( private firebase: AngularFirestore) {

  }

  getUser(): Promise<any> {
    return new Promise ((resolve, reject) => {
      this.firebase.collection('users').get().subscribe( res => {
        const users = [];
        res.forEach( usr => {
          const data: any = usr.data();
          const user = {
            id: usr.id,
            name: data.name,
            nen: data.nen,
            pictureCharacter: data.picture,
            };
          users.push(user);
        });
        resolve({characters: users});
      });
    });
  }
}
