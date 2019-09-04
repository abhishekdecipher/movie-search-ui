import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
