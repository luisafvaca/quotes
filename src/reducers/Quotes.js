import {
    QUOTES_RESQUEST_SUCCES,
    QUOTES_RESQUEST_FAILURE
} from '../actions/Quotes';

import {insert} from 'ramda'
const initialState = {
    quotes: [],
}

function Quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTES_RESQUEST_SUCCES: 
            insert(action.data, state)
            return action.data;
        case QUOTES_RESQUEST_FAILURE:
            return action.data
        default:
            return state;
    }
}

export default Quotes;