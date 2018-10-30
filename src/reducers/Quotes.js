import {
    QUOTES_RESQUEST_SUCCES,
    // QUOTES_RESQUEST_FAILURE,
    QUOTE_SAVING,
    IS_COUNTER
} from '../actions/Quotes';

// import { concat,always } from 'ramda'
const initialState = {
    savedQuotes: [],
    quote: {},
    counter: 0,
};

function Quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTES_RESQUEST_SUCCES:
            // return Object.assign({}, state, {quote: action.data})
            return {...state, quote:action.data}
        case QUOTE_SAVING:
            // return Object.assign({}, state, {savedQuotes: [action.data]})
            return {...state, savedQuotes: [...state.savedQuotes, action.data]}
        case IS_COUNTER:
            return Object.assign({}, state, {counter: state.counter + 1})
        default:
            return state;
    }
}

export default Quotes;