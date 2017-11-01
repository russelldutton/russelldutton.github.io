webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/bg_blur.jpg") + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<searchbars></searchbars>\n<hr />\n<bookmarks></bookmarks>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchbars_searchbars_component__ = __webpack_require__("../../../../../src/app/searchbars/searchbars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchbars_searchlogo_searchlogo_component__ = __webpack_require__("../../../../../src/app/searchbars/searchlogo/searchlogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookmarks_bookmarks_component__ = __webpack_require__("../../../../../src/app/bookmarks/bookmarks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__searchbars_searchbars_component__["a" /* SearchbarsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__searchbars_searchlogo_searchlogo_component__["a" /* SearchlogoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__bookmarks_bookmarks_component__["a" /* BookmarksComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bookmarks/bookmarks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.card-body {\n  padding: 10px;\n}\n\ndiv.card {\n  border-radius: 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color 200ms ease-in;\n}\n\ndiv.card:hover {\n  background-color: rgba(255, 255, 255, 0.5)\n}\n\nhr {\n  margin: 8px;\n}\n\nspan {\n  margin-bottom: 0;\n  text-align: center;\n}\n\nli a {\n  color: #444;\n}\n\nul {\n  color: #444;\n  list-style: none;\n  text-align: center;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bookmarks/bookmarks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let mark of bookmarks\">\n    <div class=\"card-body\">\n      <span>\n        <h5>{{mark.name}}</h5>\n      </span>\n      <hr>\n      <ul class=\"card-body\">\n        <li *ngFor=\"let item of mark.links\"><a [href]=\"item.link\">{{item.name}}</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bookmarks/bookmarks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookmarksComponent = (function () {
    function BookmarksComponent() {
        this.bookmarks = [
            {
                name: 'Reddit',
                icon: 'fa-reddit',
                links: [
                    {
                        name: 'r/Dota2',
                        link: 'http://www.reddit.com/r/Dota2'
                    },
                    {
                        name: 'r/Unixporn',
                        link: 'http://www.reddit.com/r/unixporn'
                    },
                    {
                        name: 'r/startpages',
                        link: 'http://www.reddit.com/r/startpages'
                    },
                    {
                        name: 'r/archlinux',
                        link: 'http://www.reddit.com/r/archlinux'
                    },
                    {
                        name: 'r/Wallpaper',
                        link: 'http://www.reddit.com/r/wallpaper'
                    },
                    {
                        name: 'r/ProgrammerHumour',
                        link: 'https://www.reddit.com/r/ProgrammerHumor'
                    }
                ]
            },
            {
                name: 'Communication',
                icon: 'fa-comments',
                links: [
                    {
                        name: 'Whatsapp',
                        link: 'https://web.whatsapp.com'
                    },
                    {
                        name: 'Gmail - Personal',
                        link: 'https://mail.google.com/mail/u/0/#inbox'
                    },
                    {
                        name: 'Gmail - Uni',
                        link: 'https://mail.google.com/mail/u/1/#inbox'
                    }
                ]
            },
            {
                name: 'Web dev',
                icon: 'fa-code',
                links: [
                    {
                        name: 'Bootstrap',
                        link: 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
                    },
                    {
                        name: 'Font Awesome',
                        link: 'http://fontawesome.io/'
                    },
                    {
                        name: 'Angular 4',
                        link: 'https://angular.io/docs'
                    },
                    {
                        name: 'W3 Schools',
                        link: 'http://www.w3schools.com'
                    },
                    {
                        name: 'Angular Material',
                        link: 'https://material.angular.io/components/categories'
                    }
                ]
            },
            {
                name: 'UP',
                icon: '',
                links: [
                    {
                        name: 'CS dept',
                        link: 'http://www.cs.up.ac.za'
                    },
                    {
                        name: 'Blackboard',
                        link: 'http://clickup.up.ac.za'
                    },
                    {
                        name: 'Tuks',
                        link: 'http://www.up.ac.za'
                    }
                ]
            },
            {
                name: 'Music',
                icon: 'fa-headphones',
                links: [
                    {
                        name: 'Soundcloud',
                        link: 'https://soundcloud.com/stream'
                    },
                    {
                        name: 'Mellow Mix',
                        link: 'https://soundcloud.com/russell9704/sets/melodic-and-relaxing'
                    },
                    {
                        name: 'Mellow Mix 2',
                        link: 'https://soundcloud.com/russell9704/sets/mellow-mix-2'
                    },
                    {
                        name: 'MrSuicideSheep',
                        link: 'https://www.youtube.com/user/MrSuicideSheep'
                    },
                    {
                        name: 'ChilloutDeer',
                        link: 'https://www.youtube.com/chilloutdeer'
                    }
                ]
            },
            {
                name: 'Dota 2',
                icon: '',
                links: [
                    {
                        name: 'Liquipedia Wiki',
                        link: 'http://wiki.teamliquid.net/dota2/Main_Page'
                    },
                    {
                        name: 'Liquid Dota',
                        link: 'http://www.liquiddota.com/'
                    },
                    {
                        name: 'OpenDota',
                        link: 'https://www.opendota.com/players/226286745'
                    },
                    {
                        name: 'Dota 2 Blog',
                        link: 'http://blog.dota2.com/?l=english'
                    }
                ]
            }
        ];
    }
    BookmarksComponent.prototype.ngOnInit = function () {
    };
    return BookmarksComponent;
}());
BookmarksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'bookmarks',
        template: __webpack_require__("../../../../../src/app/bookmarks/bookmarks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bookmarks/bookmarks.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookmarksComponent);

//# sourceMappingURL=bookmarks.component.js.map

/***/ }),

/***/ "../../../../../src/app/searchbars/searchbars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\ndiv.card {\n  height: 160px;\n  border-radius: 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color 200ms ease-in;\n}\n\ndiv.card:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\nform.search-form {\n  width: 100%;\n}\n\ninput::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\ninput.search-bar {\n  margin-top: 10px;\n  border-width: 2px;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  color: #444;\n  border-radius: 0px;\n  /* border-bottom-left-radius: 20px; */\n  border-color: #676767;\n  background: transparent;\n}\n\ninput.search-bar:focus{\n  /* background: rgba(255, 255, 255, 0.2); */\n  background: transparent;\n  color: #444;\n  border-color: #555;\n  box-shadow: 0px 8px 2px -2px rgba(5, 5, 5, 0.2);\n  /* box-shadow: none; */\n}\n\ninput.search-bar:hover{\n  /* background: rgba(255, 255, 255, 0.2); */\n  background: transparent;\n  color: #444;\n  border-color: #555;\n  box-shadow: 0px 8px 2px -2px rgba(5, 5, 5, 0.2);\n  /* box-shadow: none; */\n}\n\n/* a.btn {\n  text-decoration: none;\n  color: #444;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background: transparent;\n  border-color: #555;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchbars/searchbars.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 image-preview\">\n    <searchlogo [selectedLogo]=\"selectedLogo\"></searchlogo>\n  </div>\n  <div class=\"col-md-9\">\n    <div class=\"container-fluid card search-bar\">\n      <div *ngFor=\"let bar of bars; let i=index\" >\n          <form method=\"get\" [action]=\"bar.link\">\n            <div class=\"input-group search-bar\">\n              <input type=\"text\" name=\"q\" class=\"form-control search-bar\" autocomplete=\"off\" [attr.autofocus]=\"bar.name == 'Google Search'\" placeholder=\"{{bar.name}}\" on-focus=\"onFocus(i)\" on-blur=\"onBlur()\" (mouseenter)=\"onHover(i)\">\n            </div>\n          </form>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/searchbars/searchbars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchbarsComponent = (function () {
    function SearchbarsComponent() {
        this.logos = [
            {
                src: './assets/google_logo.png',
                link: 'http://www.google.co.za'
            },
            {
                src: './assets/youtube.png',
                link: 'http://www.youtube.co.za'
            },
            {
                src: './assets/imdb.png',
                link: 'http://www.imdb.com'
            }
        ];
        this.bars = [
            {
                name: 'Google Search',
                link: 'http://www.google.co.za/search'
            },
            {
                name: 'YouTube Search',
                link: 'http://www.youtube.co.za/results'
            },
            {
                name: 'IMDB Search',
                link: 'http://www.imdb.com/find'
            }
        ];
        this.selectedLogo = this.logos[0];
        this.focus = true;
    }
    SearchbarsComponent.prototype.ngOnInit = function () {
    };
    SearchbarsComponent.prototype.onFocus = function (index) {
        this.focus = true;
        this.selectedLogo = this.logos[index];
        console.log(index);
    };
    SearchbarsComponent.prototype.onBlur = function () {
        this.focus = false;
    };
    SearchbarsComponent.prototype.onHover = function (index) {
        if (!this.focus) {
            this.selectedLogo = this.logos[index];
        }
    };
    return SearchbarsComponent;
}());
SearchbarsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'searchbars',
        template: __webpack_require__("../../../../../src/app/searchbars/searchbars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchbars/searchbars.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchbarsComponent);

//# sourceMappingURL=searchbars.component.js.map

/***/ }),

/***/ "../../../../../src/app/searchbars/searchlogo/searchlogo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.card {\n  width: 160px;\n  height: 160px;\n  border-radius: 0;\n  background-color: rgba(240, 240, 240, 0.3);\n  transition: background-color 200ms ease-in;\n}\n\ndiv.card:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n/* img {\n  border: solid;\n  border-width: 1pt;\n  border-color: #666;\n  background-color: rgba(200, 200, 200, 0.3);\n} */\n /* i {\n   width: 150px;\n   height: 150px;\n } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchbars/searchlogo/searchlogo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <a href=\"{{selectedLogo.link}}\"><img class=\"card-img-top\" [src]=\"selectedLogo.src\" alt=\"searchLogo here\" width=\"160\" height=\"160\"></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/searchbars/searchlogo/searchlogo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchlogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchlogoComponent = (function () {
    // selectedLogo: number = 0;
    function SearchlogoComponent() {
    }
    SearchlogoComponent.prototype.ngOnInit = function () {
    };
    return SearchlogoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SearchlogoComponent.prototype, "selectedLogo", void 0);
SearchlogoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'searchlogo',
        template: __webpack_require__("../../../../../src/app/searchbars/searchlogo/searchlogo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchbars/searchlogo/searchlogo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchlogoComponent);

//# sourceMappingURL=searchlogo.component.js.map

/***/ }),

/***/ "../../../../../src/assets/bg_blur.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg_blur.37104b0a5de3d72fc0a9.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
