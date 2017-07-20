import React from 'react';
import PropTypes from 'prop-types';
import styles from './orderEditor.css';
import MenuContainer from './components/menuContainer.jsx';
import Button from '../button/button.jsx';

export default class OrderEditor extends React.Component {
  renderItems(order) {
    this.total = 0;

    return order.items.map((item, index) => {
      this.total += item.price;
      return <li
        className={styles.orderedItems}
        key={item.id}
        onClick={() => {this.props.onItemRemove(order.id, item)}}>
          {item.name}
          <div className={styles.close}>X</div>
      </li>
    });
  }

  render() {
    let button = null;
    if (this.props.order.items.length > 0) {
      button = <Button text="Send to Cooks" url="/"/>;
    }

    return (
      <div>
        {button}
        <ul className={styles.currentOrder}>
          {this.renderItems(this.props.order)}
          <span>Total = ${this.total.toFixed(2)}</span>
        </ul>
        <MenuContainer orderId={this.props.order.id} />
      </div>
    );
  }
}

OrderEditor.contextTypes = {
  store: PropTypes.object,
}
