import { Component, OnInit } from '@angular/core';

@Component({
    selector: "navbar-app",
    templateUrl: './navbar.component.html',
    moduleId: module.id

})
export class NavbarComponent implements OnInit{


    image: string = "https://static.wixstatic.com/media/3fbea1_6503c7cade0d49eea567b75f9fa01ad7~mv2.png/v1/fill/w_165,h_45,al_c,usm_0.66_1.00_0.01/3fbea1_6503c7cade0d49eea567b75f9fa01ad7~mv2.png";


    ngOnInit(): void {

        console.log('navbar');
    }


}
