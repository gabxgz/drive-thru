import { connect } from 'react-redux';
import Orders from './orders.jsx';
import { createOrder } from '../actions.js';

export const mapStateToProps = state => {
  const openOrders = state.orders.filter((order) => {
    return !order.completed;
  });

  return {
    nextOrder: state.nextOrder,
    orderTotal: openOrders.length,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onCreateOrder: id => {
      dispatch(createOrder(id));
    }
  }
}

const OrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);

export default OrdersContainer;
