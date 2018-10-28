import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './reducers/reducers'

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const root =  document.getElementById('root');
const store = createStore(AppReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

ReactDOM.render( 
    <Provider store={store}>
        <App/>
    </Provider>, root
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
