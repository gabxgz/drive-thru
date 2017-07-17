import React from 'react';
import PropTypes from 'prop-types';
import EditOrderButton from './editOrderButton.jsx';
import CompleteOrderButton from './completeOrderButton.jsx';

class Order extends React.Component {
  orderToString () {
    let orderString = '';

    this.props.order.items.map((item) =>
      orderString += `${item} `
    );

    return orderString.trim();
  }

  render() {
    return (
      <li onClick={this.props.onClick}>
        <div>{this.props.index}. {this.orderToString()}</div>
        <EditOrderButton />
        <CompleteOrderButton />
      </li>
    );
  }
}

Order.propTypes = {
  index: PropTypes.number.isRequired,
  order: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Order;
