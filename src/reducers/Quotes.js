import {
    QUOTES_RESQUEST_SUCCES,
    QUOTES_RESQUEST_FAILURE
} from '../actions/Quotes';


const initialState = {
    quotes: ["frist Quote"],
}

function Quotes(state = initialState, action) {
    switch (action.type) {
        case QUOTES_RESQUEST_SUCCES:
            Object.assign({}, state, {
                quotes: action.data
            })
            return action.data;
        case QUOTES_RESQUEST_FAILURE:
            return action.data
        default:
            return state;
    }
}

export default Quotes;