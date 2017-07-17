import React from 'react';
import { shallow, render } from 'enzyme';
import Order from './order.jsx';
import EditOrderButton from './editOrderButton.jsx';
import CompleteOrderButton from './completeOrderButton.jsx';
import stubState from '../../../stubs/stubState.js';

describe('<Order />', () => {
  let wrapper;
  let shallowWrapper;

  beforeEach(() => {
    wrapper = render(<Order
        index={1}
        order={stubState.orders[0]}
        onClick={jest.fn()}
      />
    );
    shallowWrapper = shallow(<Order
        index={1}
        order={stubState.orders[0]}
        onClick={jest.fn()}
      />
    );
  });

  it('renders a order as properly formatted string', () => {
    expect(wrapper.html()).toContain("1. Burger, Drink, Side");
  });

  it('renders a EditOrderButton', () => {
    expect(shallowWrapper.find(EditOrderButton).length).toEqual(1);
  });

  it('renders a CompleteOrderButton', () => {
    expect(shallowWrapper.find(CompleteOrderButton).length).toEqual(1);
  });
});
