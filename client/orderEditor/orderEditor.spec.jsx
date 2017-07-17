import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import stubState from '../../stubs/stubState';
import storeFake from '../../stubs/storeFake';
import OrderEditor from './orderEditor.jsx';

describe('<OrderEditor />', () => {
  let wrapper;

  beforeAll(() => {
    const state = stubState;
    const store = storeFake(state);
    const matchStub = {
      params: {
        id: 123,
      },
    };

    wrapper = mount(
      <Provider store={store}>
        <OrderEditor match={matchStub}/>
      </Provider>
      );
  });

  it('renders a <ul>', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
  });

});
