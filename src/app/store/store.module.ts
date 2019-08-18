import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    EventEffect,
    ServiceEffect
} from './effects/index';
import {
    EventsReducer,
    ServicesReducer
} from './reducers/index';
@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([EventEffect, ServiceEffect]),
        StoreModule.forFeature('eventStore', EventsReducer),
        StoreModule.forFeature('serviceStore', ServicesReducer)
    ]
})

export class NgrxStoreModule {
}

export const getEventList = (store): any => store && store.eventStore && store.eventStore.eventList;
export const getServiceList = (store): any => store && store.serviceStore && store.serviceStore.serviceList;
