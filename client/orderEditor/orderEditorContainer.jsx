import { connect } from 'react-redux';
import OrderEditor from './orderEditor.jsx';

export const mapStateToProps = (state, props) => {
  return {
    order: state.orders.find((order) => {
      return order.id == props.match.params.id
    }),
  };
}

const OrderEditorContainer = connect(
  mapStateToProps,
)(OrderEditor);

export default OrderEditorContainer;
