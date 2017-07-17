import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import driveThruApp from './reducers';
import { editOrder } from './actions';

window.STATE_FROM_SERVER = {
  orders:[
    {
      name:'item 1',
      items: [
        'Burger',
        'Drink',
        'Side',
      ],
      id: 1,
      paid: false,
      completed: false,
      editing: false,
    }, {
      name:'item 2',
      items: [
        'Burger',
        'Side',
        'Side',
      ],
      id: 2,
      paid: false,
      completed: false,
      editing: false,
    }, {
      name:'item 3',
      items: [
        'Drink',
        'Side',
      ],
      id: 3,
      paid: false,
      completed: false,
      editing: false,
    },
  ]
};

let store = createStore(driveThruApp, window.STATE_FROM_SERVER);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
