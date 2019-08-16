import { fromJS } from 'immutable';

export interface EventState {
    eventList: string[];
};

export const eventInitialState: EventState = fromJS(
    {
        eventList: [],
    }
);