import React from 'react';

export default class OrderEditor extends React.Component {
  render() {
    return (
      <div>
        Editing Order: {this.props.id}
      </div>
    );
  }
}
