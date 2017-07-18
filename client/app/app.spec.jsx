import React from 'react';
import {shallow} from 'enzyme';
import App from './app.jsx';
import OrdersContainer from '../orders/ordersContainer.jsx';
import OrderEditorContainer from '../orderEditor/orderEditorContainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('<App />', () => {
  let wrapper;
  let router;
  let routes;
  let h1;

  beforeAll(() => {
    wrapper = shallow(<App />);
    router = wrapper.find(Router);
    routes = wrapper.find(Route);
    h1 = wrapper.find('h1');
  });

  it('renders an h1', () => {
    expect(h1.length).toEqual(1);
  });

  describe('routes', () => {
    it('renders a <Router>', () => {
      expect(router.length).toEqual(1);
    });

    it('renders <Route>s', () => {
      expect(routes.length).toEqual(2);
    });

    describe('/', () => {
      it('points exactly to OrdersContainer', () => {
        expect(routes.nodes[0].props).toEqual({
          path: '/',
          exact: true,
          component: OrdersContainer
        });
      });
    });

    describe('edit/:id', () => {
      it('points to Orders', () => {
        expect(routes.nodes[1].props).toEqual({
          path: '/edit/:id',
          component: OrderEditorContainer
        });
      });
    });
  });
});
