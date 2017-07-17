import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import stubState from '../../stubs/stubState';
import storeFake from '../../stubs/storeFake';
import { mapStateToProps } from './viewContainer.jsx';
import ViewContainer from './viewContainer.jsx';
import { editOrder } from '../actions.js';
import View from './view.jsx';
import Orders from '../orders/orders.jsx';
import OrderEditor from '../orderEditor/orderEditor.jsx';

describe('<ViewContainer />', () => {
  it('is connected to View', () => {
    const state = stubState;
    const store = storeFake(state);
    const wrapper = mount(
      <Provider store={store}>
        <ViewContainer />
      </Provider>
    );

    const renderedView = wrapper.find(View);

    expect(renderedView).toBeTruthy();
  });

  describe('#mapStateToProps', () => {
    describe('.activeView', () => {
      describe('when activeView is undefined', () => {
        it('returns Orders component', () => {
          const stubState = {};
          const { activeView } = mapStateToProps(stubState);

          expect(activeView).toEqual(<Orders />);
        });
      });

      describe('when activeView.viewName is MANAGE_ORDERS', () => {
        it('returns Orders component', () => {
          const stubState = {
            activeView: {
              viewName: "MANAGE_ORDERS",
            },
          };
          const { activeView } = mapStateToProps(stubState);

          expect(activeView).toEqual(<Orders />);
        });
      });

      describe('when activeView.viewName is EDIT_ORDER', () => {
        it('returns Orders component', () => {
          const stubState = {
            activeView: {
              viewName: "EDIT_ORDER",
              id: 1,
            },
          };
          const { activeView } = mapStateToProps(stubState);

          expect(activeView).toEqual(<OrderEditor id={1}/>);
        });
      });
    });
  });
});
