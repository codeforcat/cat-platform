import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as entityActionCreators from '../../actions/entity';
import EntityEntry from '../../components/organisms/EntityEntry/EntityEntry.jsx';

function mapStateToProps(state) {
  const e = state.entity;
  return {
    entity_id        : e.entity_id,
    entity_name      : e.entity_name,
    values_temp      : e.values_temp,
    synonyms_temp    : e.synonyms_temp,
    isUpdateStateEnable: e.isUpdateStateEnable,
    isValid          : e.isValid,
    isShowError      : e.isShowError,
    errorCode        : e.errorCode,
    errorMsg         : e.errorMsg,
    apiErrorMsg      : e.apiErrorMsg,
    temp             : e.temp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, entityActionCreators), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityEntry);
