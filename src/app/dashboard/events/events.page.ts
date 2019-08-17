import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { EVENT } from './events.constant';
import { Store } from '@ngrx/store';
import { EventState } from '@app/store/states';
import { GetEventList } from '@app/store/actions';
import { getEventList } from '@store/store.module';
@Component({
    selector: 'app-events',
    templateUrl: './events.page.html',
    styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

    @ViewChild(IonInfiniteScroll, { read: '', static: false }) infiniteScroll: IonInfiniteScroll;
    eventListType: string = EVENT.TYPE.CURRENT;
    eventSearch: string = '';
    eventList = [];
    constructor(
        private store: Store<EventState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new GetEventList(''));
        this.store.select(getEventList)
            .subscribe(
                response => {
                    if (response) {
                        this.eventList = response.eventList
                    }
                }
            )
    }

    loadData(event) {
        return new Promise((resolve) => {
            setTimeout(() => {
                for (var i = 0; i < 3; i++) {
                    this.eventList.push(
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
                    );
                }

                console.log('Async operation has ended');
                resolve();
            }, 500);
        })
    }

    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

    onEventSearch(event) {
        console.log(event);
    }

    onEventSearchCancel() {
        this.eventSearch = '';
    }

    segmentChanged(event) {
        this.eventListType = event.detail.value;
    }

}
