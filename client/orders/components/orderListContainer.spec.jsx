import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import stubState from '../../../stubs/stubState';
import storeFake from '../../../stubs/storeFake';
import { mapDispatchToProps, mapStateToProps } from './orderListContainer.jsx';
import OrderListContainer from './orderListContainer.jsx';
import { editOrder } from '../../actions.js';
import OrderList from './orderList.jsx';
import Orders from '../../orders/orders.jsx';
import OrderEditor from '../../orderEditor/orderEditor.jsx';

describe('<OrderListContainer />', () => {
  it('is connected to OrderList', () => {
    const state = stubState;
    const store = storeFake(state);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <OrderListContainer />
        </Router>
      </Provider>
    );

    const renderedOrderList = wrapper.find(OrderList);

    expect(renderedOrderList).toBeTruthy();
  });

  describe('#mapStateToProps', () => {
    describe('.orders', () => {
      describe('when state.orders is undefined', () => {
        it('returns []', () => {
          const { orders } = mapStateToProps({});

          expect(orders).toEqual([]);
        });
      });

      it('only returns uncompleted orders', () => {
        const stubState = {
          orders: [
            { completed: true },
            { completed: false },
            { completed: false },
          ]
        }
        const { orders } = mapStateToProps(stubState);

        expect(orders).toHaveLength(2);
      });
    });
  });

  describe('#mapDispatchToProps', () => {
    describe('#onOrderClick', () => {
      it('calls editOrder action', () => {
        const dispatchSpy = jest.fn();
        const { onOrderClick } = mapDispatchToProps(dispatchSpy);
        onOrderClick(1);
        expect(dispatchSpy).toHaveBeenCalledWith(editOrder(1));
      });
    });
  });
});
