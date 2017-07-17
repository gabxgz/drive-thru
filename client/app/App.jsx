import React from 'react';
import ViewContainer from './viewContainer.jsx';
import styles from './app.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ORDER UP!</h1>
        <ViewContainer />
      </div>
    );
  }
}
