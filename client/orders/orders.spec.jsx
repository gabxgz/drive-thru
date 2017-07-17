import React from 'react';
import { shallow } from 'enzyme';
import Orders from './orders.jsx';
import OrderListContainer from './components/orderListContainer.jsx';
import Button from '../button/button.jsx';
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

  it('renders a Create Order <Button />', () => {
    const button = wrapper.find(Button);
    expect(button.length).toEqual(1);
    expect(button.nodes[0].props.text).toEqual('Create Order');
  });
});
