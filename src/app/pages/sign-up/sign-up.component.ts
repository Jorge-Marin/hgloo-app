import { Component, OnInit } from '@angular/core';
import { trigger, state,
  style, animate, transition } from '@angular/animations';

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

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show[ this.currentIndex ].show = !this.show[ this.currentIndex ].show;
    this.currentIndex++;
    this.show[ this.currentIndex ].show = !this.show[ this.currentIndex ].show;
  }

}
