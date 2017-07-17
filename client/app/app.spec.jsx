import React from 'react';
import {shallow} from 'enzyme';
import App from './app.jsx';
import ViewContainer from './viewContainer.jsx';

describe('<App />', () => {
  it('renders an h1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('renders a <ViewContainer>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ViewContainer).length).toEqual(1);
  });
});
