import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from '@constants/index';
import { map } from 'rxjs/operators';
import { ServiceList } from '@store/stub';


@Injectable()
export class ServicesService {
    constructor(
        private http: HttpClient
    ) {

    }

    public getServiceList = (action): Observable<any> => {
        return this.http.get(URL.SERVICE.GET_SERVICE_LIST)
            .pipe(
                map((response) => {
                    return ServiceList;
                })
            );
    }
}
