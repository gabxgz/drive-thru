import React from 'react';
import Button from '../button/button.jsx';
import OrderListContainer from './components/orderListContainer.jsx';

export default class Orders extends React.Component {
  render() {
    const url = `/edit/${this.props.nextOrder}`;
    return (
      <div>
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
