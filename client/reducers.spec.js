import { orders, activeView } from './reducers'
import * as actionTypes from './actionTypes';
import * as actions from './actions.js';

describe('reducers', () => {
  describe('#orders', () => {
    it('returns empty array as initial orders state', () => {
      expect(orders(undefined, {})).toEqual([]);
    });

    it('handles EDIT_ORDER', () => {
      const initialState = [{
        "id": 1,
        "editing": false,
      }];

      const expectedState =  [{
        "id": 1,
        "editing": true,
      }];

      expect(orders(initialState, actions.editOrder(1))).toEqual(expectedState);
    });
  });

  describe('#activeView', () => {
    it('returns MANAGE_ORDERS as initial activeView state', () => {
      expect(activeView(undefined, {})).toEqual({
        id: null,
        viewName: "MANAGE_ORDERS"
      });
    });

    it('handles EDIT_ORDER', () => {
      const initialState = {
        id: null,
        viewName: "MANAGE_ORDERS"
      };

      const expectedState =  {
        id: 1,
        viewName: "EDIT_ORDER"
      };

      expect(activeView(initialState, actions.editOrder(1))).toEqual(expectedState);
    });

    it('handles MANAGE_ORDERS', () => {
      const initialState =  {
        id: 1,
        viewName: "EDIT_ORDER"
      };

      const expectedState = {
        id: null,
        viewName: "MANAGE_ORDERS"
      };

      expect(activeView(initialState, actions.manageOrders())).toEqual(expectedState);
    });
  });
});
