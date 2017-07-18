import * as actionTypes from './actionTypes';

// Creators
export function editOrder(id) {
  return { type: actionTypes.EDIT_ORDER, id: id };
}

export function manageOrders() {
  return { type: actionTypes.MANAGE_ORDERS };
}

export function createOrder(id) {
  return { type: actionTypes.CREATE_ORDER, id: id };
}

export function addMenuItem(orderId, menuItem) {
  return {
    type: actionTypes.ADD_MENU_ITEM,
    menuItem,
    orderId,
  };
}

export function removeMenuItem(orderId, menuItem) {
  return {
    type: actionTypes.REMOVE_MENU_ITEM,
    menuItem,
    orderId,
  };
}

export function cancelOrder(orderId) {
  return {
    type: actionTypes.CANCEL_ORDER,
    orderId,
  };
}

export function completeOrder(orderId) {
  return {
    type: actionTypes.COMPLETE_ORDER,
    orderId,
  };
}
