import { connect } from 'react-redux';
import OrderList from './orderList.jsx';
import OrderFilters from '../orderFilters.js';
import { editOrder } from '../../actions.js';

const getOrders = (orders, filter = OrderFilters.SHOW_ACTIVE) => {
  switch (filter) {
    case OrderFilters.SHOW_ACTIVE:
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
      console.log(id);
      dispatch(editOrder(id));
    }
  }
}

const ActiveView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderList);

export default ActiveView;
