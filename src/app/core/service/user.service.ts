import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '../class/baseAPI.class';

@Injectable()
export class UserService extends BaseAPIClass {
    baseUrl: any;
    constructor(protected httpClient: HttpClient) {
        super(httpClient);
        this.baseUrl = '/user';
    }
}
