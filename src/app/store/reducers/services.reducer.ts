import { serviceInitialState, ServiceState } from '../states';
import { ServiceActions, GetServiceListResponse } from '../actions';
import { EventState } from '../states';
import * as types from '../types';

export function ServicesReducer(state = serviceInitialState, action: ServiceActions): ServiceState {
    switch (action.type) {
        case types.SERVICE_TYPE.GET_SERVICE_LIST_RESPONSE:
            const serviceList = (action as GetServiceListResponse).payload;
            return Object.assign({}, state, {
                serviceList
            });

        default:
            return state;
    }
}
