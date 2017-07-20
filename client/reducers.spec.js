import { orders, total, menu } from './reducers'
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
      let result;

      beforeEach(() => {
        orderId = 1;
        menuItem = {
          "name": "Side",
          "price": 2,
        };
        initialState = [{
          items: [
            {
              "name": "Burger",
              "price": 3.5,
            },
          ],
          total: '3.50',
          id: orderId,
          paid: false,
          completed: false,
          editing: false,
        }];

        result = orders(initialState, actions.addMenuItem(orderId, menuItem))
      });

      it('adds an item', () => {
        expect(result[0].items.length).toEqual(2);
      });


      it('items are unique', function() {
        const action = actions.addMenuItem(orderId, menuItem);

        const state1 = orders(initialState, action);
        const state2 = orders(state1, action);

        expect(state2[0].items[1]).not.toEqual(state2[0].items[2]);
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

  describe('#menu', () => {
    let initialState;

    beforeEach(() => {
      initialState = [{name:'Food'}];
    });
    it('returns state unchanged by default', () => {
      expect(menu(initialState, {type: 'invalid'})).toEqual(initialState);
    });

    describe('BUILD_MENU', () => {
      it('adds item to state', () => {
        const menuItem = {name: "Tacos"};
        const expectedState = initialState.slice(0)
        expectedState.push(menuItem)

        expect(menu(initialState, actions.buildMenu(menuItem))).toEqual(expectedState);
      });
    });
  });
});
