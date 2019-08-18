import { Action } from '@ngrx/store';
import * as types from '../types';

export class GetServiceList implements Action {
    readonly type: string = types.SERVICE_TYPE.GET_SERVICE_LIST;
}

export class GetServiceListResponse implements Action {
    readonly type: string = types.SERVICE_TYPE.GET_SERVICE_LIST_RESPONSE;
    readonly payload: any = {
        serviceList: []
    };
    constructor(serviceList) {
        this.payload.serviceList = serviceList;
    }
}

export type ServiceActions = GetServiceList | GetServiceListResponse;
