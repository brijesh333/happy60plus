import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@core/authentication';
import { AlertService } from '../../services/alert.service';
import { SOURCE } from '@auth/constants/';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userDetails = {
        userName: '',
        password: ''
    };
    source: string = SOURCE.USER;

    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private alertService: AlertService,
        private activatedRouter: ActivatedRoute
    ) { }

    ngOnInit() {
        this.source = this.activatedRouter.snapshot.params.source;
    }

    login() {
        // this.alertService.presentToast('');
        this.authService.login(this.userDetails).subscribe((res) => {
            if (res) {
                this.router.navigateByUrl('dashboard');
            }
            else {

            }
        });
    }

    register() {
        if (this.source === SOURCE.USER) {
            this.router.navigate(['/auth/registerUser', { source: this.source }], {
                replaceUrl: true,
                skipLocationChange: true
            });
        }
        else {
            this.router.navigate(['/auth/registerProvider', { source: this.source }], {
                replaceUrl: true,
                skipLocationChange: true
            });
        }

    }
}
