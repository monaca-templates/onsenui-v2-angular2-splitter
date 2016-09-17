import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
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


