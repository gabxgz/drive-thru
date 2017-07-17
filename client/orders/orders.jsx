import React from 'react';
import Button from '../button/button.jsx';
import OrderListContainer from './components/orderListContainer.jsx';

export default class Orders extends React.Component {
  render() {
    return (
      <div>
        <OrderListContainer />
        <Button text="Create Order" />
      </div>
    );
  }
}
