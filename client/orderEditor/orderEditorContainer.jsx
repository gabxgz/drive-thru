import { connect } from 'react-redux';
import OrderEditor from './orderEditor.jsx';
import { removeMenuItem } from '../actions.js';

export const mapStateToProps = (state, props) => {
  return {
    order: state.orders.find((order) => {
      return order.id == props.match.params.id
    }),
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onItemRemove: (orderId, menuItem) => {
      dispatch(removeMenuItem(orderId, menuItem));
    }
  };
}

const OrderEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderEditor);

export default OrderEditorContainer;
