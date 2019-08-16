import { eventInitialState } from '../states';
import { EventActions, EventListResponse } from '../actions';
import { EventState } from '../states';
import * as types from '../types';

export function EventsReducer(state = eventInitialState, action: EventActions): EventState {
    switch (action.type) {
        case types.EVENT_TYPES.GET_EVENT_LIST_RESPONSE:
            const eventList = (<EventListResponse>action).payload;
            return Object.assign({}, state, {
                eventList:eventList
            });

        default:
            return state;
    }
}