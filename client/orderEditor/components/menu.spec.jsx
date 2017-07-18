import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import stubState from '../../../stubs/stubState';
import storeFake from '../../../stubs/storeFake';
import Menu from './menu.jsx';

describe('<Menu />', () => {
  let wrapper;
  let ulEl;
  let liEls;

  beforeAll(() => {
    const store = storeFake(stubState);
    wrapper = shallow(
        <Menu />
      );

    ulEl = wrapper.find('ul');
    liEls = ulEl.find('li');
  });

  it('renders a <ul>', () => {
    expect(ulEl).toHaveLength(1);
  });

  it('renders <li>s for each menu item', () => {
    expect(liEls).toHaveLength(stubState.orders[0].items.length);
  });
});
