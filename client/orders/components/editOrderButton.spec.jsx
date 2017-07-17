import React from 'react';
import {shallow} from 'enzyme';
import EditOrderButton from './editOrderButton.jsx';

describe('<EditOrderButton />', () => {
  it('renders a button', () => {
    const wrapper = shallow(<EditOrderButton />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
