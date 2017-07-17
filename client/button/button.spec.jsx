import React from 'react';
import {shallow} from 'enzyme';
import Button from './button.jsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('<Button />', () => {
  let wrapper;
  let buttonEl;
  let cbStub = jest.fn();
  let buttonText = "button text";

  beforeAll(() => {
    wrapper = shallow(<Button text={buttonText} cb={cbStub} />);
    buttonEl = wrapper.find('button');
  });

  it('renders a button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('passes props.cb to button onClick', () => {
    buttonEl.nodes[0].props.onClick();
    expect(cbStub).toHaveBeenCalled();
  });

  it('renders props.text', () => {
    expect(buttonEl.html()).toContain(buttonText);
  });
});
