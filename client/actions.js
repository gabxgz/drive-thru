import * as actionTypes from './actionTypes';

// Creators
export function editOrder(id) {
  return { type: actionTypes.EDIT_ORDER, id: id };
}

export function manageOrders() {
  return { type: actionTypes.MANAGE_ORDERS };
}
