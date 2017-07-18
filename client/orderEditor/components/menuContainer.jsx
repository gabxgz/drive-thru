import { connect } from 'react-redux';
import Menu from './menu.jsx';
import { addMenuItem } from '../../actions.js';

export const mapStateToProps = (state, props) => {
  return {
    currentOrder: state.orders.find((order) => {
      return order.id == props.orderId
    }),
  };
}

export const mapDispatchToProps = dispatch => {
  return {
    onAddMenuItem: (orderId, menuItem) => {
      dispatch(addMenuItem(orderId, menuItem));
    }
  };
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default MenuContainer;
