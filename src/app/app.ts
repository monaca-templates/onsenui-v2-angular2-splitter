import {Component, ViewChild} from '@angular/core';
import {ONS_DIRECTIVES, OnsSplitterContent, OnsSplitterSide} from 'angular2-onsenui';
import {HomePage} from './home';
import {MenuPage} from './menu';
import {AboutPage} from './about';

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  @ViewChild(OnsSplitterContent) content: OnsSplitterContent;
  @ViewChild(OnsSplitterSide) side: OnsSplitterSide;

  pages = {
    home: HomePage,
    menu: MenuPage,
    about: AboutPage
  };

  load(name) {
    if (this.pages.hasOwnProperty(name)) {
      this.content.element.load(this.pages[name]);
      this.side.element.close();
    } else {
      console.error(`page ${name} not found`);
    }
  }
}
