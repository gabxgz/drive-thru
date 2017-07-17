import React from 'react';
import PropTypes from 'prop-types';
import EditOrderButton from './editOrderButton.jsx';
import CompleteOrderButton from './completeOrderButton.jsx';

class Order extends React.Component {
  orderToString () {
    const { items } = this.props.order;
    let orderString = '';

    items.map((item, index) => {
      let separator;

      if (index === items.length - 1) {
        separator = '';
      } else {
        separator = ', ';
      }

      orderString += `${item.name}${separator}`
    });

    return orderString;
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
