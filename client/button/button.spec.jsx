import React from 'react';
import {shallow} from 'enzyme';
import Button from './button.jsx';

describe('<Button />', () => {
  it('renders a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
