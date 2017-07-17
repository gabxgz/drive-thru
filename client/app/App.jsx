import React from 'react';
import ActiveView from './activeView.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ORDER UP!</h1>
        <ActiveView />
      </div>
    );
  }
}
