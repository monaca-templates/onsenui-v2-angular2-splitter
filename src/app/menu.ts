import {Component} from '@angular/core';
import {OnsSplitterContent} from 'angular2-onsenui';
import {MyApp} from './app';

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Menu</div>
    </ons-toolbar>

    <div class="content">
      <ons-list>
        <ons-list-item (click)="app.load('home')">Home</ons-list-item>
        <ons-list-item (click)="app.load('about')">About</ons-list-item>
      </ons-list>
    </div>
  `
})
export class MenuPage {

  constructor(private app : MyApp) {
  }

}


