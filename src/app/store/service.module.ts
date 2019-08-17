import { NgModule } from '@angular/core';
import {
    EventService
} from './services/events.service';

@NgModule({
    providers: [
        EventService
    ]
})
export class ServiceModule {

}
