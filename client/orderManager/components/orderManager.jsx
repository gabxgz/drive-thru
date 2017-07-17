import React from 'react';
import NewOrderButton from './newOrderButton.jsx';
import ActiveOrders from './activeOrders.js';

export default class OrderManager extends React.Component {
  onOrderClick(id = 0) {
    return id;
  }

  render() {
    return (
      <div>
        <ActiveOrders onOrderClick={this.props.orderClick}/>
        <NewOrderButton />
      </div>
    );
  }
}
