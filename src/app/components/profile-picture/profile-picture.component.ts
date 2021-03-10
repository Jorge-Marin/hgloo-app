import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  defaultPicture: string = 'url("../../../assets/images/grant.jpg")';

  constructor() { }

  ngOnInit(): void {
  }

}
