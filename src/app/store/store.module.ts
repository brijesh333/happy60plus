import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EventEffect } from './effects/events.effect';
import { EventsReducer } from './reducers/events.reducer';
@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([EventEffect]),
        StoreModule.forFeature('eventStore', EventsReducer)
    ]
})

export class NgrxStoreModule {
}

export const getEventList = (store): any => store && store.eventStore && store.eventStore.eventList;
