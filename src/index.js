import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Component/Router.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './store/reducers/rootreducer';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
const store = createStore(rootreducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Router /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
