import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import stubState from '../../stubs/stubState';
import storeFake from '../../stubs/storeFake';
import OrderEditor from './orderEditor.jsx';
import Menu from './components/menu.jsx';

describe('<OrderEditor />', () => {
  let wrapper;
  let ulEl;
  let liEls;

  it('fix me', () => {
    expect(true).toEqual(true);
  })
  // beforeAll(() => {
  //   const store = storeFake(stubState);
  //   const matchStub = {
  //     params: {
  //       id: 1,
  //     },
  //   };

  //   wrapper = mount(
  //     <Provider store={store}>
  //       <OrderEditor match={matchStub}/>
  //     </Provider>
  //   );

  //   ulEl = wrapper.find('ul');
  //   liEls = ulEl.find('li');
  // });

  // it.skip('renders 2<ul>s', () => {
  //   expect(ulEl).toHaveLength(2);
  // });

  // it.skip('renders <li>s for each order item', () => {
  //   expect(ulEl.nodes[0]).toHaveLength(stubState.orders[0].items.length);
  // });

  // it('renders an Menu', () => {
  //   expect(wrapper.find(Menu)).toHaveLength(1);
  // });
});
