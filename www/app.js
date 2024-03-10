(self.webpackChunkonsenui_v2_angular2_splitter=self.webpackChunkonsenui_v2_angular2_splitter||[]).push([[524],{700:e=>{e.exports='<ons-splitter> <ons-splitter-side [page]="pages.menu" side="left" width="200px" collapse swipeable> </ons-splitter-side> <ons-splitter-content [page]="pages.home"> </ons-splitter-content> </ons-splitter>'},7812:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AboutPage=void 0;var i=n(1802),s=function(){function e(){}return o([(0,i.Component)({selector:"ons-page[about]",template:'\n    <ons-toolbar>\n      <div class="center">About</div>\n    </ons-toolbar>\n\n    <div class="content">\n      <p>This is the about component.</p>\n    </div>\n  '}),r("design:paramtypes",[])],e)}();t.AboutPage=s},4890:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.MyApp=void 0;var i=n(1802),s=n(479),a=n(8646),c=n(3382),l=n(7812),p=function(){function e(){this.pages={home:a.HomePage,menu:c.MenuPage,about:l.AboutPage}}var t,p;return e.prototype.load=function(e){this.pages.hasOwnProperty(e)?(this.content.element.load(this.pages[e]),this.side.element.close()):console.error("page ".concat(e," not found"))},o([(0,i.ViewChild)(s.OnsSplitterContent),r("design:type","function"==typeof(t=void 0!==s.OnsSplitterContent&&s.OnsSplitterContent)?t:Object)],e.prototype,"content",void 0),o([(0,i.ViewChild)(s.OnsSplitterSide),r("design:type","function"==typeof(p=void 0!==s.OnsSplitterSide&&s.OnsSplitterSide)?p:Object)],e.prototype,"side",void 0),o([(0,i.Component)({selector:"app",template:n(700),styles:["./app.css"]})],e)}();t.MyApp=p},8646:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.HomePage=void 0;var i=n(1802),s=function(){function e(){}return o([(0,i.Component)({selector:"ons-page[home]",template:'\n    <ons-toolbar>\n      <div class="center">Home</div>\n    </ons-toolbar>\n\n    <div class="content">\n      <p>This is the home component. Swipe right to see the sliding menu.</p>\n    </div>\n  '}),r("design:paramtypes",[])],e)}();t.HomePage=s},3382:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.MenuPage=void 0;var s=n(1802),a=n(4890),c=function(){function e(e){this.app=e}var t;return o([(0,s.Component)({selector:"ons-page[menu]",template:'\n    <ons-toolbar>\n      <div class="center">Menu</div>\n    </ons-toolbar>\n\n    <div class="content">\n      <ons-list>\n        <ons-list-item (click)="app.load(\'home\')">Home</ons-list-item>\n        <ons-list-item (click)="app.load(\'about\')">About</ons-list-item>\n      </ons-list>\n    </div>\n  '}),i(0,(0,s.Inject)((0,s.forwardRef)((function(){return a.MyApp})))),r("design:paramtypes",["function"==typeof(t=void 0!==a.MyApp&&a.MyApp)?t:Object])],e)}();t.MenuPage=c},4600:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};Object.defineProperty(t,"__esModule",{value:!0}),n(2837),n(205);var r=n(713),i=n(1802),s=n(7830),a=n(963),c=n(479),l=n(4890),p=n(8646),f=n(3382),u=n(7812);(0,i.enableProdMode)(),r.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var d=function(){function e(){}return o([(0,i.NgModule)({imports:[c.OnsenModule,a.HttpModule],declarations:[l.MyApp,p.HomePage,f.MenuPage,u.AboutPage],entryComponents:[p.HomePage,f.MenuPage,u.AboutPage],bootstrap:[l.MyApp],schemas:[i.CUSTOM_ELEMENTS_SCHEMA]})],e)}();(0,s.platformBrowserDynamic)().bootstrapModule(d).catch((function(e){return console.error(e)}))},9061:(e,t,n)=>{"use strict";n(5882),n(1747)},6475:(e,t,n)=>{"use strict";n(5519),n(7830),n(1802),n(963),n(479)},433:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=433,e.exports=t}},e=>{var t=t=>e(e.s=t);e.O(0,[74],(()=>(t(9061),t(4600),t(6475)))),e.O()}]);