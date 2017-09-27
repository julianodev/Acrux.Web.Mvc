import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";

export const ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: AboutComponent }

]