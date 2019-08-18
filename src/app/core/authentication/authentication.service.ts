import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage.service';
import { Authentication } from '../model/authentication.model';
import { User, RegistrationDetail } from '../model/user';
import { AuthResponse } from '../model/auth-response';
import { Storage } from '@ionic/storage';
const credentialsKey = 'credentials';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private httpClient: HttpClient,
        private localStorageService: LocalStorageService,
        private storage: Storage
    ) {
        const savedCredentials = this.localStorageService.getItem(credentialsKey);
        if (savedCredentials) {
            this.credentials = JSON.parse(savedCredentials);
        }
    }
    private credentials: Authentication.Credentials | null;
    public credentials$ = new EventEmitter<Authentication.Credentials>();



    authServer = 'http://localhost:3000';
    authSubject = new BehaviorSubject(false);

    /**
     * Checks is the user is authenticated.
     * @return {boolean} True if the user is authenticated.
     */
    isAuthenticated(): boolean {
        return true;
        // return !!this.credentials;
    }

    // register(detail: RegistrationDetail): Observable<AuthResponse> {
    //     return this.httpClient.post<AuthResponse>(`${this.authServer}/register`, detail).pipe(
    //         tap(async (res: AuthResponse) => {
    //             if (res.user) {
    //                 await this.storage.set('ACCESS_TOKEN', res.user.access_token);
    //                 await this.storage.set('EXPIRES_IN', res.user.expires_in);
    //                 this.authSubject.next(true);
    //             }
    //         })

    //     );
    // }

    register(detail: RegistrationDetail): boolean {
        this.storage.set('USER_NAME', 'admin');
        this.storage.set('PASSWORD', 'admin');
        this.storage.set('ACCESS_TOKEN', 'admin');
        this.storage.set('EXPIRES_IN', 'admin');
        return false;
    }

    login(user: User): Observable<AuthResponse> {
        return this.httpClient.post(`${this.authServer}/login`, user).pipe(
            tap(async (res: AuthResponse) => {
                if (res.user) {
                    await this.storage.set('ACCESS_TOKEN', res.user.access_token);
                    await this.storage.set('EXPIRES_IN', res.user.expires_in);
                    this.authSubject.next(true);
                }
            })
        );
    }
    // login(user: User): Promise<any> {
    //     let username = '';
    //     let password = '';
    //     this.storage.set('USER_NAME', 'admin');
    //     this.storage.set('PASSWORD', 'admin');
    //     return new Promise (resolve => {
    //         this.storage.get('USER_NAME').then((val) => {
    //             username = val;
    //             this.storage.get('USER_NAME').then((val) => {
    //                 password = val;
    //                 if (user.userName === username && user.password === password) {
    //                     // return true;
    //                     resolve();
    //                 }
    //                 reject();
    //                 // return false;
    //             });
    //         });
    //     })

    // }

    async logout() {
        await this.storage.remove('ACCESS_TOKEN');
        await this.storage.remove('EXPIRES_IN');
        this.authSubject.next(false);
    }

    isLoggedIn() {
        return true;
        // return this.authSubject.asObservable();
    }
}
