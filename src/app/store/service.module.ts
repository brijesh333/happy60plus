import { NgModule } from '@angular/core';
import {
    EventService,
    ServicesService
} from '@store/services';

@NgModule({
    providers: [
        EventService,
        ServicesService
    ]
})
export class ServiceModule {

}
