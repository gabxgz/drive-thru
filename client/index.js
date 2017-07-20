import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { editOrder } from './actions';
import stubState from '../stubs/stubState';
import { menu } from './constants/menu.js';
import keyGenerator from './utils/keyGenerator.js';

let key = 0;

menu.map((menuItem) => {
  menuItem.id = keyGenerator.getKey();
});

let store = createStore(reducers, {
  menu,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
