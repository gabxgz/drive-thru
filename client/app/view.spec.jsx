import React from 'react';
import {shallow} from 'enzyme';
import View from './view.jsx';
import Orders from '../orders/orders.jsx';
import OrderEditor from '../orderEditor/orderEditor.jsx';

describe('<View />', () => {
  it('renders activeView passed in', () => {
    let wrapper = shallow(<View activeView={<Orders />} />);
    expect(wrapper.find(Orders).length).toEqual(1);
    expect(wrapper.find(OrderEditor).length).toEqual(0);

    wrapper = shallow(<View activeView={<OrderEditor />} />);
    expect(wrapper.find(Orders).length).toEqual(0);
    expect(wrapper.find(OrderEditor).length).toEqual(1);
  });
});
