import {Component} from '@angular/core';
import {ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: `
    <ons-toolbar>
      <div class="center">Home</div>
    </ons-toolbar>

    <div class="content">
      <p>This is the home component. Swipe right to see the sliding menu.</p>
    </div>
  `
})
export class HomePage {
  constructor() {}
}


