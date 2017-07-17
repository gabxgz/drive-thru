import React from 'react';
import { connect } from 'react-redux';
import { editOrder } from '../actions.js';
import Orders from '../orders/orders.jsx';
import OrderEditor from '../orderEditor/orderEditor.jsx';
import View from './view.jsx';

const getView = (activeView = {}) => {
  switch (activeView.viewName) {
    case "EDIT_ORDER":
      return <OrderEditor id={ activeView.id }/>;
    case "MANAGE_ORDERS":
      return <Orders />;
    default:
      return <Orders />;
  }
}

export const mapStateToProps = state => {
  return {
    activeView: getView(state.activeView)
  }
}

const ViewContainer = connect(
  mapStateToProps
)(View);

export default ViewContainer;
