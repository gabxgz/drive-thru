import { combineReducers } from 'redux'
import { EDIT_ORDER, MANAGE_ORDERS } from './actions.js';

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

function activeView (state = '', action) {
  switch (action.type) {
    case EDIT_ORDER:
      return {
        viewName: "EDIT_ORDER",
        id: action.id,
      }
    case MANAGE_ORDERS:
      return {
        viewName: "MANAGE_ORDERS",
        id: action.id,
      }
    default:
      return {
        viewName: "MANAGE_ORDERS",
        id: action.id,
      }
  }
}

const driveThruApp = combineReducers({
  orders,
  activeView,
});

export default driveThruApp;
