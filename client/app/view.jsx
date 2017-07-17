import React from 'react';

export default class View extends React.Component {
  render() {
    return (
      <div>
        {this.props.activeView}
      </div>
    );
  }
}
