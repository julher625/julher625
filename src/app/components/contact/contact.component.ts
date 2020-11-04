import { Component, AfterViewInit } from '@angular/core';
import {trigger, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    trigger('aniHome', [
      transition('init => start', animate('1.2s ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: 1})
      ]))),
    ])
  ]
})
export class ContactComponent implements AfterViewInit {

  public state = 'init';

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init();
    });
  }

  init(): void {
    this.state = 'start';
    console.log(this.state);
  }

}
