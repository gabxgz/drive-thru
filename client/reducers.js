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

    case actionTypes.CREATE_ORDER:
      return state.concat([{
        items: [],
        id: action.id,
        paid: false,
        completed: false,
        editing: false,
      }]);

    case actionTypes.CANCEL_ORDER:
      const clonedState = state.slice(0);
      const orderRemovedState = clonedState.filter((order, index) => {
        return order.id !== action.orderId;
      });
      return orderRemovedState;

    case actionTypes.ADD_MENU_ITEM:
      let orderIndex = state.findIndex((order) => {
        return order.id == action.orderId;
      });
      let newItems = state[orderIndex].items.slice(0)
      newItems.push(action.menuItem);

      let newOrder = Object.assign({}, state[orderIndex], { items: newItems });
      let newState = state.slice(0)
      newState[orderIndex] = newOrder;

      return newState;

    case actionTypes.REMOVE_MENU_ITEM:
      orderIndex = state.findIndex((order) => {
        return order.id == action.orderId;
      });

      newItems = state[orderIndex].items.slice(0).filter((item, index) => {
        return index !== orderIndex;
      });

      newOrder = Object.assign({}, state[orderIndex], { items: newItems });
      newState = state.slice(0);
      newState[orderIndex] = newOrder;

      return newState;
    default:
      return state;
  }
}

export function nextOrder (state = 1, action) {
  switch (action.type) {
    case actionTypes.CREATE_ORDER:
      return state + 1;
    default:
      return state;
  }
}

export function total (state = "0.00", action) {
  switch (action.type) {
    case actionTypes.ADD_MENU_ITEM:
      if (action.menuItem.price) {
        const initialTotal = parseFloat(state, 10);
        const newTotal = initialTotal + action.menuItem.price;
        return newTotal.toFixed(2);
      }
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  orders,
  nextOrder,
  total,
});

export default reducers;
