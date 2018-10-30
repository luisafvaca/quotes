import {
    QUOTES_RESQUEST_SUCCES,
    // QUOTES_RESQUEST_FAILURE,
    QUOTE_SAVING
} from '../actions/Quotes';

// import { concat,always } from 'ramda'
const initialState = {
    savedQuotes: [],
    quote: {},
};

function Quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTES_RESQUEST_SUCCES:
            // return state.quote = action.data;
            
            return Object.assign({}, state, {quote: action.data})
        case QUOTE_SAVING:
            return state
        default:
            return state;
    }
}

export default Quotes;