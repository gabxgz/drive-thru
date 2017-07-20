import React from 'react';
import PropTypes from 'prop-types';
import friesImg from '../images/fries.png';
import drinkImg from '../images/drink.png';
import burgerImg from '../images/burger.png';
import styles from './menu.css';

export default class Menu extends React.Component {
  getImageUrl (itemName) {
    switch (itemName.toLowerCase()) {
      case 'burger':
        return burgerImg;
      case 'side':
        return friesImg;
      case 'drink':
        return drinkImg;
      default:
        return '';
    }
  }

  renderMenuItems() {
    return this.props.menu.map((menuItem) => {
      return (<li
        key={menuItem.id}
        className={styles.menuItem}
        onClick={() => {this.props.onAddMenuItem(this.props.currentOrder.id, menuItem)}}
      >
        <img src={this.getImageUrl(menuItem.name)} />
        {menuItem.name}
      </li>);
    });
  }

  render() {
    return (
      <ul className={styles.menu}>
        {this.renderMenuItems()}
      </ul>
    );
  }
}

Menu.contextTypes = {
  store: PropTypes.object,
}
