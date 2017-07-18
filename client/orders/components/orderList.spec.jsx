import React from 'react';
import { shallow } from 'enzyme';
import OrderList from './orderList.jsx';
import OrderContainer from './order/orderContainer.jsx';
import stubState from '../../../stubs/stubState.js';

describe('<OrderList />', () => {
  let wrapper;
  let ul;
  let orders;
  let order;
  const onClickStub = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<OrderList
        orders={stubState.orders}
        onOrderClick={onClickStub}
      />
    );

    ul = wrapper.find('ul');
    orders = ul.find(OrderContainer);
    order = orders.nodes[0];
  });

  it('renders a <ul>', () => {
    expect(ul).toHaveLength(1);
  });

  it('renders orders inside ul', () => {
    expect(orders).toHaveLength(3);
  });

  describe('when rendering Order', () => {
    it('passes index to Order as current index + 1', () => {
      expect(order.props.index).toEqual(1);
    });

    it('passes index to Order as current index + 1', () => {
      expect(order.props.index).toEqual(1);
    });

    it('passes order data to Order', () => {
      expect(order.props.order).toEqual(stubState.orders[0]);
    });
  });
});
