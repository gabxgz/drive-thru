import React from 'react';

export default class Editor extends React.Component {
  render() {
    // this.props.onOrderClick(1);

    return (
      <div>
        {this.props.activeView}
      </div>
    );
  }
}
