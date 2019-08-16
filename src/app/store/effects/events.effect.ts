import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as types from '../types';
import { EventService } from '../services';
import { switchMap, map } from 'rxjs/operators';
import { EventListResponse } from '../actions';

@Injectable()
export class EventEffect {

    constructor(
        private actions: Actions,
        private eventService: EventService
    ) {

    }

    @Effect()
    getEventList: Observable<any> = this.actions
        .pipe(
            ofType(types.EVENT_TYPES.GET_EVENT_LIST),
            // switchMap((actions) => this.eventService.eventList(actions)),
            // switchMap((response:any) =>{
            //     console.log(response);
            //     return [
            //         new EventListResponse(response)
            //     ]
            // })
            map(response => new EventListResponse(response))
        );



}