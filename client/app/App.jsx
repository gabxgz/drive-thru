import React from 'react';
import styles from './app.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Orders from '../orders/orders.jsx';
import OrderEditor from '../orderEditor/orderEditor.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>ORDER UP!</h1>
          <Route exact={true} path="/" component={Orders} />
          <Route path="/edit/:id" component={OrderEditor} />
        </div>
      </Router>
    );
  }
}
