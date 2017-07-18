import { connect } from 'react-redux';
import Order from './order.jsx';
import { cancelOrder , completeOrder } from '../../../actions.js';

export const mapStateToProps = (state, props) => {
  return {
    index: props.index,
    order: props.order,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onOrderCancel: id => {
      dispatch(cancelOrder(id));
    },
    onOrderComplete: id => {
      dispatch(completeOrder(id));
    }
  }
}

const OrderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);

export default OrderContainer;
