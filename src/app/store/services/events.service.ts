import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL } from '@constants/index';
import { eventsList } from '@store/stub';

@Injectable()
export class EventService {

    constructor(
        private http: HttpClient
    ) {

    }

    public eventList = (action): Observable<any> => {
        return this.http.get(URL.EVENT.GET_EVENT_LIST)
            .pipe(
                map((response) => {
                    return eventsList;
                })
            );
    }
}
