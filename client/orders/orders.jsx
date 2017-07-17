import React from 'react';
import NewOrderButton from './components/newOrderButton.jsx';
import OrderListContainer from './components/orderListContainer.js';

export default class Orders extends React.Component {
  onOrderClick(id = 0) {
    return id;
  }

  render() {
    return (
      <div>
        <OrderListContainer onOrderClick={this.props.orderClick} />
        <NewOrderButton />
      </div>
    );
  }
}
