import {Component} from '@angular/core';
import {ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: `
    <ons-toolbar>
      <div class="center">About</div>
    </ons-toolbar>

    <div class="content">
      <p>This is the about component.</p>
    </div>
  `
})
export class AboutPage {
  constructor() {}
}


