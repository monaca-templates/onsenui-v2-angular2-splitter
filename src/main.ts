// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'angular2-onsenui';

import {MyApp} from './app/app';
import {HomePage} from './app/home';
import {MenuPage} from './app/menu';
import {AboutPage} from './app/about';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        OnsenModule,
        HttpModule,
    ],
    declarations: [
        MyApp,
        HomePage,
        MenuPage,
        AboutPage,
    ],
    entryComponents: [
        HomePage,
        MenuPage,
        AboutPage,
    ],
    bootstrap: [
        MyApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
