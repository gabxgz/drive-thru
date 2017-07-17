import React from 'react';
import PropTypes from 'prop-types';
import EditOrderButton from './editOrderButton.jsx';
import CompleteOrderButton from './completeOrderButton.jsx';
import { Link } from 'react-router-dom';

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
    const url = `/edit/${this.props.index}`;

    return (
      <li onClick={this.props.onClick}>
        <Link to={url}>
          <div>{this.props.index}. {this.orderToString()}</div>
        </Link>
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
