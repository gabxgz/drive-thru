import * as actions from './actions'
import * as actionTypes from './actionTypes';

describe('actions', () => {
  describe('#editOrder', () => {
    it('returns action to edit order', () => {
      const id = 1
      const expectedAction = {
        type: actionTypes.EDIT_ORDER,
        id,
      };

      expect(actions.editOrder(id)).toEqual(expectedAction);
    });
  });

  describe('#manageOrders', () => {
    it('returns action to edit order', () => {
      const expectedAction = {
        type: actionTypes.MANAGE_ORDERS,
      };

      expect(actions.manageOrders()).toEqual(expectedAction);
    });
  });

  describe('#createOrder', () => {
    it('returns action to edit order', () => {
      const id = 234
      const expectedAction = {
        type: actionTypes.CREATE_ORDER,
        id,
      };

      expect(actions.createOrder(id)).toEqual(expectedAction);
    });
  });

  describe('#addMenuItem', () => {
    it('returns action to add menu item', () => {
      const menuItem = {
        "id": 1,
        "name": "Burger",
        "icon": "burger.jpg",
        "price": 3.5,
      };

      const expectedAction = {
        type: actionTypes.ADD_MENU_ITEM,
        menuItem,
      };

      expect(actions.addMenuItem(menuItem)).toEqual(expectedAction);
    });
  });
});
