import { Action } from '@ngrx/store';
import * as types from '@store/types';

export class GetEventList implements Action {
    readonly type = types.EVENT_TYPES.GET_EVENT_LIST;
    readonly payload: any = {};
    constructor(eventType: any) {
        this.payload = {
            eventType
        }
    }
}

export class EventListResponse implements Action{
    readonly type=types.EVENT_TYPES.GET_EVENT_LIST_RESPONSE;
    readonly payload:any={}
    constructor(eventList){
        this.payload={
            eventList
        }
    }
}

export type EventActions = GetEventList | EventListResponse;