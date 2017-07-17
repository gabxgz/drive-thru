import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes';

export function orders (state = [], action) {
  switch (action.type) {
    case actionTypes.EDIT_ORDER:
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

export function activeView (state = '', action) {
  switch (action.type) {
    case actionTypes.EDIT_ORDER:
      return {
        viewName: "EDIT_ORDER",
        id: action.id,
      }
    case actionTypes.MANAGE_ORDERS:
      return {
        viewName: "MANAGE_ORDERS",
        id: null,
      }
    default:
      return {
        viewName: "MANAGE_ORDERS",
        id: null,
      }
  }
}

const reducers = combineReducers({
  orders,
  activeView,
});

export default reducers;
