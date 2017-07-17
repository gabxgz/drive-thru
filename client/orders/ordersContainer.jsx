import { connect } from 'react-redux';
import Orders from './orders.jsx';
import { createOrder } from '../actions.js';

export const mapStateToProps = state => {
  console.log({state});
  return {
    nextOrder: state.nextOrder
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
