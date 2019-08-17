import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SOURCE } from '@auth/constants/';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})

export class IndexPage implements OnInit {
    source: string = SOURCE.USER;
    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
    }

    login(source: string) {
        if (source === 'user') {
            this.source = SOURCE.USER
        }
        else {
            this.source = SOURCE.SERVICEPROVIDER;
        }
        this.router.navigate(['/auth/login', { source: this.source }], {
            replaceUrl: true,
            skipLocationChange: true
        });
    }

}
