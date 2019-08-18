import { Injectable } from '@angular/core';
import * as types from '../types';
import { Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from '../services';
import { GetServiceListResponse } from '../actions';

@Injectable()
export class ServiceEffect {
    constructor(
        private actions: Actions,
        private servicesService: ServicesService
    ) {

    }

    @Effect()
    getServiceList: Observable<any> = this.actions
        .pipe(
            ofType(types.SERVICE_TYPE.GET_SERVICE_LIST),
            switchMap((actions) => this.servicesService.getServiceList(actions)),
            switchMap((response: any) => {
                return [
                    new GetServiceListResponse(response)
                ];
            })
        );
}
