import React from 'react';
import {shallow} from 'enzyme';
import NewOrderButton from './newOrderButton.jsx';

describe('<NewOrderButton />', () => {
  it('renders a button', () => {
    const wrapper = shallow(<NewOrderButton />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
