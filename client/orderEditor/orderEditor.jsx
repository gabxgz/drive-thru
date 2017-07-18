import React from 'react';
import PropTypes from 'prop-types';
import styles from './orderEditor.css';
import MenuContainer from './components/menuContainer.jsx';
import { keyGenerator } from '../utils/keyGenerator.js';

export default class OrderEditor extends React.Component {
  renderItems(order) {
    this.total = 0;

    return order.items.map((item, index) => {
      this.total += item.price;
      return <li key={keyGenerator() + index}>{item.name}</li>
    });
  }

  render() {
    return (
      <div>
        <ul className={styles.currentOrder}>
          {this.renderItems(this.props.order)}
          <span>Total = {this.total.toFixed(2)}</span>
        </ul>
        <MenuContainer orderId={this.props.order.id} />
      </div>
    );
  }
}

OrderEditor.contextTypes = {
  store: PropTypes.object,
}
