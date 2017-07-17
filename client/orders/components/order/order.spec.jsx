import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, render } from 'enzyme';
import Order from './order.jsx';
import Button from '../../../button/button.jsx';
import stubState from '../../../../stubs/stubState.js';

describe('<Order />', () => {
  let wrapper;
  let shallowWrapper;

  beforeEach(() => {
    wrapper = render(
      <Router>
        <Order
          index={1}
          order={stubState.orders[0]}
          onClick={jest.fn()}
        />
      </Router>
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

  it('renders an Accept Payment Button', () => {
    const button = shallowWrapper.find(Button);
    expect(button.length).toEqual(1);
    expect(button.nodes[0].props.text).toEqual('Accept Payment');
  });
});
