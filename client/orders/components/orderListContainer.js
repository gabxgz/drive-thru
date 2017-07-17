import { connect } from 'react-redux';
import OrderList from './orderList.jsx';
import filters from '../filters.js';
import { editOrder } from '../../actions.js';

const getOrders = (orders, filter = filters.SHOW_ACTIVE) => {
  switch (filter) {
    case filters.SHOW_ACTIVE:
      return orders.filter(order => !order.completed);
    default:
      return orders;
  }
}

const mapStateToProps = state => {
  return {
    orders: getOrders(state.orders, state.orderFilter)
  }
}

const mapDispatchToProps = dispatch => {
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
