import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import stubState from '../../../stubs/stubState';
import storeFake from '../../../stubs/storeFake';
import { mapDispatchToProps, mapStateToProps } from './menuContainer.jsx';
import MenuContainer from './menuContainer.jsx';
import Menu from './menu.jsx';
import { buildMenu } from '../../actions.js';

describe('<MenuContainer />', () => {
  it('is connected to Menu', () => {
    const store = storeFake(stubState);
    const wrapper = shallow(
      <Provider store={store}>
        <MenuContainer />
      </Provider>
    );

    const renderedMenu = wrapper.find(Menu);
    expect(renderedMenu).toBeTruthy();
  });

  describe('#mapStateToProps', () => {
    describe('.menu', () => {
      it('is state.menu', () => {
        expect(mapStateToProps(stubState, {}).menu).toEqual(stubState.menu);
      });
    });
  });

  describe('#mapDispatchToProps', () => {
    describe('#onBuildMenu', () => {
      it('calls buildMenu action', () => {
        const dispatchSpy = jest.fn();
        const { onBuildMenu } = mapDispatchToProps(dispatchSpy);
        const menuItem = stubState.menu[0];

        onBuildMenu(menuItem);

        expect(dispatchSpy).toHaveBeenCalledWith(buildMenu(menuItem));
      });
    });
  });
});
