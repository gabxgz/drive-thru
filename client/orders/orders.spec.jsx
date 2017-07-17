import React from 'react';
import { shallow } from 'enzyme';
import Orders from './orders.jsx';
import OrderListContainer from './components/orderListContainer.jsx';
import NewOrderButton from './components/newOrderButton.jsx';
import stubState from '../../stubs/stubState.js';

describe('<Orders />', () => {
  let wrapper;
  const onClickStub = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<Orders />);
  });

  it('renders an <OrderListContainer />', () => {
    expect(wrapper.find(OrderListContainer)).toHaveLength(1);
  });

  it('renders a <NewOrderButton />', () => {
    expect(wrapper.find(NewOrderButton)).toHaveLength(1);
  });
});
