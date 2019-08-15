import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    logOut() {
        if (this.authService.logout()) {
            this.router.navigateByUrl('login');
        }
        else {

        }
    }

}
