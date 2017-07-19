import { orders, nextOrder, total } from './reducers'
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

    describe('when handling ADD_MENU_ITEM', () => {
      let initialState;
      let expectedState;
      let orderId;
      let menuItem;

      beforeEach(() => {
        orderId = 1;
        menuItem = {
          "id": 2,
          "name": "Side",
          "icon": "side.jpg",
          "price": 2,
        };
        initialState = [{
          items: [
            {
              "id": 1,
              "name": "Burger",
              "icon": "burger.jpg",
              "price": 3.5,
            },
          ],
          total: '3.50',
          id: orderId,
          paid: false,
          completed: false,
          editing: false,
        }];
      });

      it('adds an item', () => {
        const expectedState = [{
          items: [
            {
              "id": 1,
              "name": "Burger",
              "icon": "burger.jpg",
              "price": 3.5,
            },
             menuItem,
          ],
          total: '3.50',
          id: 1,
          paid: false,
          completed: false,
          editing: false,
        }];

        expect(orders(initialState, actions.addMenuItem(orderId, menuItem))).toEqual(expectedState);
      });

      it('items are unique', function() {
        const action = actions.addMenuItem(orderId, menuItem);

        const state1 = orders(initialState, action);
        const state2 = orders(state1, action);

        expect(state2[0].items[1]).not.toBe(state2[0].items[2]);
      });
    });

    it('handles REMOVE_MENU_ITEM', () => {
      const orderId = 1;
      const menuItem =  {
        "id": 1,
        "name": "Burger",
        "icon": "burger.jpg",
        "price": 3.5,
      };
      const initialState = [{
        "id": 1,
        items: [
          menuItem
        ]
      }];

      const expectedState =  [{
        "id": 1,
        items: []
      }];

      expect(orders(initialState, actions.removeMenuItem(orderId, menuItem))).toEqual(expectedState);
    });
  });

  describe('#nextOrder', () => {
    it('returns 1 as initial orders state', () => {
      expect(nextOrder(undefined, {})).toEqual(1);
    });

    it('handles CREATE_ORDER', () => {
      const initialState = 350;
      const expectedState = 351;

      expect(nextOrder(initialState, actions.createOrder(350))).toEqual(expectedState);
    });
  });

  describe('#total', () => {
    it("returns 0.00 as initial total", () => {
      const menuItem = {
        price: 0,
      };

      expect(total(undefined, actions.addMenuItem(1, menuItem))).toEqual('0.00');
    });

    it("handles ADD_MENU_ITEM", () => {
      const initialState = "3.50";
      const expectedState = "4.50";
      const menuItem = {
        price: 1,
      };

      expect(total(initialState, actions.addMenuItem(1, menuItem))).toEqual(expectedState);
    });
  });
});
