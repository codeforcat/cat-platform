import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as payloadActionCreators from '../../actions/payload';
import Payloads from '../../components/molecules/Payloads/Payloads.jsx';

function mapStateToProps(state) {
  const p = state.payload;
  return {
    payloads   : p.payloads,
    isShowError: p.isShowError,
    errorMsg   : p.errorMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, payloadActionCreators), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Payloads);
