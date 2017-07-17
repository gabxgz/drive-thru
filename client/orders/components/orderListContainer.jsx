import { connect } from 'react-redux';
import OrderList from './orderList.jsx';
import { editOrder } from '../../actions.js';

const getOrders = (orders = []) => {
  return orders.filter(order => !order.completed) || [];
}

export const mapStateToProps = state => {
  return {
    orders: getOrders(state.orders)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onOrderClick: id => {
      dispatch(editOrder(id));
    }
  }
}

const OrderListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderList);

export default OrderListContainer;
