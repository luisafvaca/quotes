import {
    QUOTES_RESQUEST_SUCCES,
    QUOTES_RESQUEST_FAILURE,
    QUOTES_RESQUEST_START_REQUEST,
    QUOTE_SAVING,
    IS_COUNTER
} from '../actions/Quotes';

// import { concat,always } from 'ramda'
const initialState = {
    savedQuotes: [],
    quote: {},
    counter: 0,
    quoteError: "",
    onRequest: false
};

function Quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTES_RESQUEST_SUCCES:
            // return Object.assign({}, state, {quote: action.data})
            return {...state, quote:action.data, onRequest: false}
        case QUOTE_SAVING:
            // return Object.assign({}, state, {savedQuotes: [action.data]})
            return {...state, savedQuotes: [...state.savedQuotes, action.data]}
        case IS_COUNTER:
            return Object.assign({}, state, {counter: state.counter + 1})
        case QUOTES_RESQUEST_FAILURE:
            return {...state, quoteError: "At moment is not possible get info"}
        case QUOTES_RESQUEST_START_REQUEST: 
            return {...state, onRequest: true}
        default:
            return state;
    }
}

export default Quotes;