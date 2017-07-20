import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import stubState from '../../stubs/stubState';
import OrderEditor from './orderEditor.jsx';

describe('<OrderEditor />', () => {
  let wrapper;
  let ulEl;
  let liEls;

  beforeAll(() => {
    wrapper = shallow(<OrderEditor order={stubState.orders[0]}/>);

    ulEl = wrapper.find('ul');
    liEls = ulEl.find('li');
  });

  it('renders a <ul>', () => {
    expect(ulEl).toHaveLength(1);
  });

  it('renders <li>s for each order item', () => {
    expect(liEls).toHaveLength(stubState.orders[0].items.length);
  });

  it('menuItem key matches id', () => {
    const key = parseInt(liEls.nodes[0].key, 10);
    const id = stubState.orders[0].items[0].id;
    expect(key).toEqual(id);
  });
});
