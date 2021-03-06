import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogueActionCreators from '../../actions/dialogue';
import DialogueEntry from '../../components/organisms/DialogueEntry/DialogueEntry.jsx';

function mapStateToProps(state) {
  const d = state.dialogue;
  return {
    question_id      : d.question_id,
    question_name    : d.question_name,
    entities         : d.entities,
    exists_entities  : d.exists_entities,
    phrases          : d.phrases,
    random           : d.random,
    isUpdateStateEnable: d.isUpdateStateEnable,
    isValid          : d.isValid,
    isShowError      : d.isShowError,
    errorCode        : d.errorCode,
    errorMsg         : d.errorMsg,
    apiErrorMsg      : d.apiErrorMsg,
    temp             : d.temp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, dialogueActionCreators), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogueEntry);
