import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { editOrder } from './actions';
import stubState from '../stubs/stubState';

window.STATE_FROM_SERVER = stubState;

let store = createStore(reducers, window.STATE_FROM_SERVER);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
