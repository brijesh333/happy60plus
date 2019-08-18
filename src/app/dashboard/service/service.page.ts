import { Component, OnInit } from '@angular/core';
import { ServiceState } from '@app/store/states';
import { Store } from '@ngrx/store';
import { GetServiceList } from '@store/actions';
import { getServiceList } from '@app/store/store.module';
@Component({
    selector: 'app-service',
    templateUrl: './service.page.html',
    styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

    serviceList: any = [];

    constructor(
        private store: Store<ServiceState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new GetServiceList());
        this.store.select(getServiceList)
            .subscribe(
                response => {
                    if (response) {
                        this.serviceList = response.serviceList;
                    }
                }
            );
    }

}
