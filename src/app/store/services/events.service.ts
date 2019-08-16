import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

export const events = [
    {
        icon: 'walk',
        type: 'Morning walk',
        title: 'Morning Walk by Lake-side',
        description: 'Morning walk at Agara lake followed by light Yoga and Snacks',
        date: '03-Aug-2019',
        time: '8:00am-10:00am'
    },
    {
        icon: 'cloudy-night',
        type: 'Night timeout',
        title: 'Musical Night at SMF Club house',
        description: 'Bollywood musical night with light dinner and tambola',
        date: '10-Aug-2019',
        time: '8:00am-10:00am'
    },
    {
        icon: 'help-buoy',
        type: 'Social service',
        title: 'Visit to an Orphanage',
        description: 'Visit an orphanage at Sarjapur road, Bangalore',
        date: '03-Aug-2019',
        time: '8:00am-10:00am'
    }
]

@Injectable()
export class EventService {
    url = 'https://jsonplaceholder.typicode.com/todos/1';

    constructor(
        private http: HttpClient
    ) {

    }

    public eventList = (action): Observable<any> => {
        return this.http.get(this.url)
            .pipe(
                map((response) => {
                    return this.eventList;
                })
            )
    }
}