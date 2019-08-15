import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(): boolean {
        // return true;
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }

        console.log('Not authenticated, redirecting...');
        this.router.navigate(['/login'], {
            replaceUrl: true
        });
        return false;
    }
}
