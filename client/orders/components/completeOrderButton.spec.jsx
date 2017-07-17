import React from 'react';
import {shallow} from 'enzyme';
import CompleteOrderButton from './completeOrderButton.jsx';

describe('<CompleteOrderButton />', () => {
  it('renders a button', () => {
    const wrapper = shallow(<CompleteOrderButton />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
