import React from 'react';
import NewOrderButton from './components/newOrderButton.jsx';
import OrderListContainer from './components/orderListContainer.jsx';

export default class Orders extends React.Component {
  render() {
    return (
      <div>
        <OrderListContainer />
        <NewOrderButton />
      </div>
    );
  }
}
