import { fromJS } from 'immutable';

export interface ServiceState {
    serviceList: Array<any>;
}

export const serviceInitialState: ServiceState = fromJS(
    {
        eventList: [],
    }
);
