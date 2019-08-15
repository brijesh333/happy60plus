import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-service',
    templateUrl: './service.page.html',
    styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

    serviceList = [
        {
            serviceId: '1',
            iconName: 'help-circle-outline',
            serviceName: 'Help Buddy',
            serviceDesc:'Personal assist, daily care service'

        },
        {
            serviceId: '2',
            iconName: 'basket',
            serviceName: 'Grocery',
            serviceDesc:''
        },
        {
            serviceId: '3',
            iconName: 'basket',
            serviceName: 'Health Assist',
            serviceDesc:''
        },
        {
            serviceId: '4',
            iconName: 'basket',
            serviceName: 'Party Planning',
            serviceDesc:''
        },
        {
            serviceId: '5',
            iconName: 'add-circle-outline',
            serviceName: 'Medicine',
            serviceDesc:'Buy medicine,'
        }
    ]
    constructor() { }

    ngOnInit() {
    }

}
