import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[about]',
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


