import {
    QUOTES_RESQUEST_SUCCES,
    QUOTES_RESQUEST_FAILURE
} from '../actions/Quotes';

import { concat } from 'ramda'
const initialState = {
    savedQuotes: [],
    quote: {}
};

function Quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTES_RESQUEST_SUCCES:

            //concat(state, action.data)
            return state.quote = action.data;
        case QUOTES_RESQUEST_FAILURE:
            return action.data
        default:
            return state;
    }
}

export default Quotes;