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
});
