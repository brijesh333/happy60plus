import { EventEmitter, Injectable } from '@angular/core';
import { ErrorModel } from '../model/error.model';

@Injectable()
export class ErrorMessageService {
    private errorsDetail: ErrorModel.ErrorMessageObject[] = [];
    public errors$ = new EventEmitter<ErrorModel.ErrorMessageObject[]>();

    constructor() { }

    get errors(): ErrorModel.ErrorMessageObject[] {
        return this.errorsDetail;
    }

    public set(error: string, type: string, serviceUrl: string) {
        this.errorsDetail.push({
            id: Date.now(),
            error,
            type,
            serviceUrl
        });
        console.log(this.errorsDetail);
        this.errors$.emit(this.errorsDetail);
    }

    public clear() {
        this.errorsDetail = [];
        this.errors$.emit(this.errorsDetail);
    }
}
