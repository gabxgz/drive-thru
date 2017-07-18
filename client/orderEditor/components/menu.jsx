import React from 'react';
import PropTypes from 'prop-types';
import { menu } from '../../constants/menu.js';
import friesImg from '../images/fries.png';
import drinkImg from '../images/drink.png';
import burgerImg from '../images/burger.png';
import styles from './menu.css';
import { keyGenerator } from '../../utils/keyGenerator';

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

  renderMenuItems(menuItems) {
    return menuItems.map((menuItem) =>
      <li
        key={keyGenerator() + menuItem.id}
        className={styles.menuItem}
        onClick={() => {this.props.onAddMenuItem(this.props.currentOrder.id, menuItem)}}
      >
        <img src={this.getImageUrl(menuItem.name)} />
        {menuItem.name}
      </li>
    );
  }

  render() {
    return (
      <ul className={styles.menu}>
        {this.renderMenuItems(menu)}
      </ul>
    );
  }
}

Menu.contextTypes = {
  store: PropTypes.object,
}
