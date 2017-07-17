import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../button/button.jsx';
import { Link } from 'react-router-dom';
import styles from './order.css'

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
          <div className={styles.order}>{this.props.index}. {this.orderToString()}</div>
          <Button text="Accept Payment"/>
        </Link>
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
