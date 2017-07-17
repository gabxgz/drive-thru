import { combineReducers } from 'redux'
import { EDIT_ORDER } from './actions.js';

function orders (state = [], action) {
  switch (action.type) {
    case EDIT_ORDER:
      return state.map((order) => {
        if (order.id !== action.id) { return order };

        return Object.assign({}, order, {
          editing: !order.editing,
        });
      });
    default:
      return state;
  }
}

const driveThruApp = combineReducers({ orders });

export default driveThruApp;
