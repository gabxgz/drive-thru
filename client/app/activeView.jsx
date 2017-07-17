import React from 'react';
import { connect } from 'react-redux';
import { editOrder } from '../actions.js';
import OrderManager from '../orderManager/components/orderManager.jsx';
import OrderEditor from '../orderEditor/components/orderEditor.jsx';
import Editor from './editor.jsx';

const getView = (activeView) => {
  console.log(activeView);
  switch (activeView.viewName) {
    case "EDIT_ORDER":
      return <OrderEditor id={ activeView.id }/>;
    case "MANAGE_ORDERS":
      return <OrderManager />;
    default:
      return <OrderManager />;
  }
}

const mapStateToProps = state => {
  console.log(state.activeView);
  return {
    activeView: getView(state.activeView)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderClick: id => {
      // console.log(id);
      dispatch(editOrder(id));
    }
  }
}

const ActiveOrders = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);

export default ActiveOrders;
