import React from 'react';
import styles from './button.css'
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  render() {
    let contents;

    if (this.props.url) {
      contents = <Link to={this.props.url}>{this.props.text}</Link>;
    } else {
      contents = this.props.text;
    }

    return (
      <button onClick={this.props.cb}>
        {contents}
      </button>
    );
  }
}
