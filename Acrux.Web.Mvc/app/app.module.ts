import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

//Root
import { AppComponent } from './app.component';

//Routes
//import {ROUTES} from './app.route';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './users/user.component';


//Pages


//Services
import { GithubService } from './providers/users/github.service';
import { AboutComponent } from "./about/about.component";






@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        UserComponent,
        AboutComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
     //   RouterModule.forRoot(ROUTES)
    ],
    entryComponents: [
        AppComponent,
        NavbarComponent,
        UserComponent,
        AboutComponent
    ],
    providers:
    [
        GithubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
