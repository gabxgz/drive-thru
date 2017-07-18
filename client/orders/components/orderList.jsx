import React from 'react';
import Order from './order/order.jsx';
import PropTypes from 'prop-types';
import { keyGenerator } from '../../utils/keyGenerator.js';

class OrderList extends React.Component {
  renderOrders(orderList) {
    return orderList.map((order, index) =>
      <Order
        key={keyGenerator() + order.id}
        index={index + 1}
        order={order}
        onClick={() => {this.props.onOrderClick(index + 1)}}
      />
    );
  }

  render() {
    const orders = this.renderOrders(this.props.orders);

    return (
      <ul>
        {orders}
      </ul>
    );
  }
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        id: PropTypes.number.isRequired,
        paid: PropTypes.bool,
        completed: PropTypes.bool,
    })
  ).isRequired,
  onOrderClick: PropTypes.func,
}

export default OrderList;
