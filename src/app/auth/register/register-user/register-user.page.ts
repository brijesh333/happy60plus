import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../core/authentication';
import { SOURCE } from '../../constants/';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.page.html',
    styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

    source: string = SOURCE.USER;
    step = 0;
    registrationDetail = {
        guardian: {
            name: '',
            contactNo: ''
        },
        userDetail: {
            firstName: '',
            lastName: '',
            dob: '',
            contactNo: '',
            emailId: '',
            gender: 'male',
            address: '',
            city: '',
            state: '',
            pincode: ''
        },
        emargencyDetail: {
            name: '',
            contactNo: ''
        }
    };

    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) { }

    ngOnInit() {
        this.source = this.activatedRouter.snapshot.params.source;
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    register() {
        // this.authService.register(this.registrationDetail).subscribe((res) => {
        //     this.router.navigateByUrl('home');
        // });
        if (this.authService.register(this.registrationDetail)) {
            this.router.navigateByUrl('home');
        }
    }

    login() {
        // this.router.navigateByUrl('/login');
        this.router.navigate(['/auth/login', { source: this.source }], {
            replaceUrl: true,
            skipLocationChange: true
        });
    }


}
