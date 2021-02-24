import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../../services/get-user.service';

@Component({
  selector: 'ngx-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  users: any = [];

  constructor( private hxhCharacter: GetUserService) { }

  ngOnInit(): void {
    this.hxhCharacter.getUser().then( response => {
      this.users = response.characters;
    });
  }

}
