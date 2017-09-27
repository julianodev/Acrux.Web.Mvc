import { Component, OnInit } from '@angular/core';
import { GithubService } from "../providers/users/github.service";
import 'rxjs/Rx';



@Component({
    selector: "user-app",
    templateUrl: './user.component.html',
    moduleId: module.id

})
export class UserComponent implements OnInit {


    users: Array<any>;
    user: any;
    isVisible: Boolean = false;

    constructor(private githubService: GithubService) {

    }

    ngOnInit(): void {




    }

    getUsers(): void {

        this.isVisible = true;

        this.githubService.getUsers().take(10)
            .subscribe((users: any) => {

                this.users = users;
                console.log('users =>', users);
                this.isVisible = false;
            });

    }

    showDetail(user: any): void {

        this.user = user;
    }

}
