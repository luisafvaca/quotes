

export const QUOTES_RESQUEST_SUCCES = 'QUOTES_RESQUEST_SUCCES';
export const QUOTES_RESQUEST_FAILURE = 'QUOTES_RESQUEST_FAILURE';
export const QUOTES_RESQUEST_STAR_REQUEST = 'QUOTES_RESQUEST_STAR_REQUEST';

export const fetcohQuotessBegin = () => ({
    type: QUOTES_RESQUEST_STAR_REQUEST
});

export const fetchQuotesSuccess = response => ({
    type: QUOTES_RESQUEST_SUCCES,
    data: response
});

export const fetchQuotesFailure = error => ({
    type: QUOTES_RESQUEST_FAILURE,
    data: error
});

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

