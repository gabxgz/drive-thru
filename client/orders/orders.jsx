import React from 'react';
import Button from '../button/button.jsx';
import OrderListContainer from './components/orderListContainer/orderListContainer.jsx';
import styles from './orders.css';

export default class Orders extends React.Component {
  render() {
    const url = `/edit/${this.props.nextOrder}`;
    let managerAlert = null;

    if (this.props.orderTotal > 4) {
      managerAlert = <div className={styles.managerAlert}>Manager Alerted</div>;
    }

    return (
      <div>
        { managerAlert }
        <OrderListContainer />
        <Button
          text="Create Order"
          url={url}
          cb={() => {this.props.onCreateOrder(this.props.nextOrder)}}
          />
      </div>
    );
  }
}
