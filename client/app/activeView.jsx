import React from 'react';
import { connect } from 'react-redux';
import { displayOrder } from '../actions.js';
import OrderManager from '../orderManager/components/orderManager.jsx';
import OrderEditor from '../orderEditor/components/orderEditor.jsx';
import Editor from './editor.jsx';

const getView = (activeView) => {
  switch (activeView) {
    case "EDIT_ORDER":
      return <OrderEditor />;
    case "MANAGE_ORDERS":
      return <OrderManager />;
    default:
      return <OrderManager />;
  }
}

const mapStateToProps = state => {
  return {
    activeView: getView(state.activeView)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderClick: id => {
      console.log(id);
      dispatch(displayOrder(id));
    }
  }
}

const ActiveOrders = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);

export default ActiveOrders;
