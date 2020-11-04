import { Component, AfterViewInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('aniHome',[
      state('init', style({opacity: 0})),
      state('start', style({opacity: 1})),
      transition('init => start', animate('1000ms ease-in')),
      transition('start => init', animate('1000ms ease-out'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit{
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
