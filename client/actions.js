import { OrderFilters } from './orderManager/orderFilters';
// Action Types
// export const TOGGLE_EDIT_ORDER = 'TOGGLE_EDIT_ORDER';
export const DISPLAY_ORDERS = 'DISPLAY_ORDERS';
export const EDIT_ORDER = 'EDIT_ORDER';

// Creators
export function displayOrder(id = 0) {
  return { type: EDIT_ORDER, id: id};
}

export function displayOrders(filter = OrderFilters.SHOW_ACTIVE) {
  return { type: DISPLAY_ORDERS, filter: filter};
}

// export function editOrder(id) {
//   return { type: TOGGLE_EDIT_ORDER, id: id };
// }
