import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import stubState from '../../../stubs/stubState';
import Menu from './menu.jsx';

describe('<Menu />', () => {
  let wrapper;
  let ulEl;
  let liEls;

  beforeAll(() => {
    wrapper = shallow(<Menu menu={stubState.menu}/>);

    ulEl = wrapper.find('ul');
    liEls = ulEl.find('li');
  });

  it('renders a <ul>', () => {
    expect(ulEl).toHaveLength(1);
  });

  it('renders <li>s for each menu item', () => {
    expect(liEls).toHaveLength(stubState.menu.length);
  });
});
