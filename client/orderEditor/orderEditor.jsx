import React from 'react';
import PropTypes from 'prop-types';

export default class OrderEditor extends React.Component {
  render() {
    const orders = this.context.store.getState().orders;
    const order = orders.find((order) => {
      return order.id == this.props.match.params.id;
    });

    return (
      <div>
        Editing Order: {this.props.match.params.id}
        <ul></ul>
      </div>
    );
  }
}

OrderEditor.contextTypes = {
  store: PropTypes.object,
}
