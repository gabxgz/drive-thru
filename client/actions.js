// Action Types
export const MANAGE_ORDERS = 'MANAGE_ORDERS';
export const EDIT_ORDER = 'EDIT_ORDER';

// Creators
export function editOrder(id) {
  return { type: EDIT_ORDER, id: id };
}

export function displayOrders() {
  return { type: MANAGE_ORDERS };
}

// export function editOrder(id) {
//   return { type: TOGGLE_EDIT_ORDER, id: id };
// }
