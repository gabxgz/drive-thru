import React from 'react';
import styles from './app.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OrdersContainer from '../orders/ordersContainer.jsx';
import OrderEditor from '../orderEditor/orderEditor.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>ORDER UP!</h1>
          <Route exact={true} path="/" component={OrdersContainer} />
          <Route path="/edit/:id" component={OrderEditor} />
        </div>
      </Router>
    );
  }
}
