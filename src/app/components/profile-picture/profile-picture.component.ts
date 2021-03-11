import { Component, OnInit } from '@angular/core';
import { DomSanitizer , SafeStyle } from '@angular/platform-browser';

interface Picture {
  name?: string;
  safeUrl?: SafeStyle;
  file?: File;
}

@Component({
  selector: 'ngx-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  picture: Picture = { safeUrl: null };
  defaultPicture: string = 'url("../../../assets/images/grant.jpg")';

  constructor( private sanitizaer: DomSanitizer ) { }

  ngOnInit(): void {
  }

  selectPicture(event) {
    if ( event.target.files.length > 0 ) {
      this.picture.name = event.target.files[0].name;
      this.picture.file = event.target.files[0];

      if ( this.picture.file ) {
        const reader = new FileReader();
        reader.onload = ( e: any ) => {
          this.picture.safeUrl = this.sanitizaer.bypassSecurityTrustStyle(
            `url(' ${ e.target.result } ')`
          );
        }
        reader.readAsDataURL( event.target.files[0] );
      }
    }

    console.log( this.picture );
  }
  
}
