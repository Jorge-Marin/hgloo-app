import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { terms } from '../../utilities/terms-and-conditions';
import { StorageService } from '../../services/storage.service';
import { LocationService } from '../../services/location.service';
import { emailPattern, phoneNumber } from '../../utilities/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

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
  urlrequest: string = 'https://hgloo-api-rest.herokuapp.com';
  showForm: boolean = false;
  currentIndex: number = 0;
  countrys: any = [];
  provinces: any = [];
  citys: any = [];
  profileImage: any;
  photo: any;
  saving: boolean = false;
  termsAndConditions = terms;
  signUpForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required ],
    lastname: ['', Validators.required],
    phone: [ '' , [ Validators.required , Validators.pattern( phoneNumber )]],
    email: ['', [Validators.required, Validators.pattern( emailPattern )]],
    password: [ '', Validators.required],
    confirmPassword: [ '', Validators.required],
    country: [ '', Validators.required],
    province: [ '', Validators.required],
    city: [ '', Validators.required],
    genre: ['', Validators.required],
  });

  constructor( private formBuilder: FormBuilder,
               private auth: AuthService,
               private location: LocationService,
               private storage: StorageService,
               private http: HttpClient,
               private dialogService: NbDialogService,
               private router: Router) { }

  ngOnInit(): void {
    this.showForm = true;
    this.location.getCountrys().subscribe( country => {
      this.countrys = country;
    });
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
  get genre() { return this.signUpForm.get('genre'); }

  toggle( modal: any) {
    switch ( this.currentIndex ) {
      case 0: {
        if ( this.photo !== undefined && !this.name.invalid && !this.lastname.invalid && !this.phone.invalid ) {
          this.delay( 300 );
          this.showForm = !this.showForm;
         }
         break;
      }
      case 1: {
        if ( this.confirmPassword.value !== this.password.value ) {
          this.confirmPassword.setErrors( { invalid: true } );
        }
        if ( !this.email.invalid && !this.password.invalid && !this.confirmPassword.invalid ) {
          this.delay( 300 );
          this.showForm = !this.showForm;
         }
         break;
      }
      case 2: {
        if ( !this.country.invalid && !this.province.invalid && !this.city.invalid ) {
          this.openModal(modal);
         }
        break;
     }
   }
  }

  get stateName() {
    return this.showForm ? 'show' : 'hide';
  }

  saveUser() {
    this.saving = true;
    if ( this.signUpForm.valid ) {
      this.auth.signUp( this.email.value, this.password.value ).then( res => {
        this.storage.uploadFile( this.photo, res.uid).then( upload => {
          const user = this.signUpForm.value;
          user['id'] = res.uid;
          user['urlFoto'] = upload.url;

          this.http.post( this.urlrequest + '/sign-up/register-user/' , user).subscribe( response => {
            this.saving = false;
            this.router.navigate(['/help-for-user']);
          });
        });
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

  setImage( $image ) {
    this.photo = $image.profile.file;
    const reader = new FileReader();
    reader.readAsDataURL($image.profile.file);
    reader.onload = () => {
    this.profileImage = reader.result;
    };
  }

  getProvinces() {
    this.location.getProvinces( this.country.value ).subscribe( provinces => {
      this.provinces = provinces;
    });
  }

  getCitys() {
    this.location.getCitys( this.country.value, this.province.value ).subscribe( citys => {
      this.citys = citys;
    });
  }

  openModal(modal: any ) {
    this.dialogService.open(modal, { hasScroll: true});
  }
}
