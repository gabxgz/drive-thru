import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes';
import keyGenerator from './utils/keyGenerator.js';

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

    case actionTypes.COMPLETE_ORDER:
      const completedOrderIndex = state.findIndex((order) => {
        return order.id === action.orderId;
      });

      const newCompletedOrder = Object.assign({}, state[completedOrderIndex], {
        completed: true,
      });
      const completedOrderState = state.slice(0);
      completedOrderState[completedOrderIndex] = newCompletedOrder;
      return completedOrderState;

    case actionTypes.ADD_MENU_ITEM:
      const findOrderIndex = () => {
        return state.findIndex((order) => {
          return order.id == action.orderId;
        });
      };

      const getUpdatedItems = (order) => {
        const clonedArr = order.items.slice(0);
        const menuItem = Object.assign({}, action.menuItem);
        menuItem.id = keyGenerator.getKey();
        clonedArr.push(menuItem);
        return clonedArr;
      };

      let orderIndex = findOrderIndex();
      let order = state[orderIndex];
      let newItems = getUpdatedItems(order);
      let newOrder = Object.assign({}, order, { items: newItems });
      let addMenuItemState = state.slice(0);

      addMenuItemState[orderIndex] = newOrder;

      return addMenuItemState;

    case actionTypes.REMOVE_MENU_ITEM:
      orderIndex = state.findIndex((order) => {
        return order.id == action.orderId;
      });

      newItems = state[orderIndex].items.slice(0).filter((item, index) => {
        return item !== action.menuItem;
      });

      newOrder = Object.assign({}, state[orderIndex], { items: newItems });
      const removeMenuItemState = state.slice(0);
      removeMenuItemState[orderIndex] = newOrder;

      return removeMenuItemState;
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

export function menu (state = [], action) {
  switch (action.type) {
    case actionTypes.BUILD_MENU:
      let newMenuState = state.slice(0);
      newMenuState.push(action.menuItem);

      return newMenuState;
    default:
      return state;
  }
}

const reducers = combineReducers({
  orders,
  total,
  menu,
});

export default reducers;
