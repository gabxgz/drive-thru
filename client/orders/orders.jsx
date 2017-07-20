import React from 'react';
import Button from '../button/button.jsx';
import OrderListContainer from './components/orderList/orderListContainer.jsx';
import styles from './orders.css';
import keyGenerator from '../utils/keyGenerator'

export default class Orders extends React.Component {
  render() {
    const key = keyGenerator.getKey();
    const url = `/edit/${key}`;
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
          cb={() => {this.props.onCreateOrder(key)}}
          />
      </div>
    );
  }
}
