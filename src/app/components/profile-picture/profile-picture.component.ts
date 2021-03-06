import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer , SafeStyle, SafeUrl } from '@angular/platform-browser';

interface Picture {
  name?: string;
  safeUrl?: SafeStyle;
  file?: File;
  result?: SafeStyle;
}

@Component({
  selector: 'ngx-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  @Input() pictureExist: any;
  @Output() imageReady = new EventEmitter();
  picture: Picture = { safeUrl: null };
  defaultBackground: SafeStyle = this.sanitizer.bypassSecurityTrustStyle( 'url(' + '../../../assets/images/background-images/image-outline.svg' + ')' );
  defaultPicture: string = 'url("../../../assets/images/grant.jpg")';

  constructor( private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {

    if ( this.pictureExist ) {
      this.picture.safeUrl = this.sanitizer.bypassSecurityTrustStyle(
        'url(' + this.pictureExist + ')',
      );
    }
  }

  selectPicture(event) {
    if ( event.target.files.length > 0 ) {
      this.picture.name = event.target.files[0].name;
      this.picture.file = event.target.files[0];

      if ( this.picture.file ) {
        const reader = new FileReader();
        reader.onload = ( e: any ) => {
          this.picture.result = e.target.result;
          this.picture.safeUrl = this.sanitizer.bypassSecurityTrustStyle(
            'url(' + this.picture.result + ')',
          );
        };
        reader.readAsDataURL( event.target.files[0] );
      }
      this.picture.result = this.picture.safeUrl;
      this.imageReady.emit( { profile: this.picture });
    }
  }
}
