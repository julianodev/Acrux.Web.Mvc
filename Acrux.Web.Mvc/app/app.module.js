"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { RouterModule } from '@angular/router';
//Root
var app_component_1 = require("./app.component");
//Routes
//import {ROUTES} from './app.route';
//Components
var navbar_component_1 = require("./navbar/navbar.component");
var user_component_1 = require("./users/user.component");
//Pages
//Services
var github_service_1 = require("./providers/users/github.service");
var about_component_1 = require("./about/about.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            user_component_1.UserComponent,
            about_component_1.AboutComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
        ],
        entryComponents: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            user_component_1.UserComponent,
            about_component_1.AboutComponent
        ],
        providers: [
            github_service_1.GithubService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map