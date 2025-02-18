

export const QUOTES_RESQUEST_SUCCES = 'QUOTES_RESQUEST_SUCCES';
export const QUOTES_RESQUEST_FAILURE = 'QUOTES_RESQUEST_FAILURE';
export const QUOTES_RESQUEST_START_REQUEST = 'QUOTES_RESQUEST_START_REQUEST';
export const QUOTE_SAVING = "QUOTE_SAVING";
export const IS_COUNTER = 'IS_COUNTER';

export const isCounter = () => ({
    type: IS_COUNTER
})
export const fetcohQuotessBegin = () => ({
    type: QUOTES_RESQUEST_START_REQUEST
});

export const fetchQuotesSuccess = data => ({
    type: QUOTES_RESQUEST_SUCCES,
    data
});

export const fetchQuotesFailure = error => ({
    type: QUOTES_RESQUEST_FAILURE,
    data: error
});

export const quoteSaving = data => ({
    type: QUOTE_SAVING,
    data
})

export function getQuotesRequest(dispatch) {
   return (dispatch) => {
    dispatch(fetcohQuotessBegin());
    fetch('https://talaikis.com/api/quotes/random/').then((response) => {
        return response.json()
    }).then((data)=>{
        dispatch(fetchQuotesSuccess(data))
    }).catch((error) => {
        dispatch(fetchQuotesFailure(error))
    })
   }
}

