import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogueActionCreators from '../../actions/dialogue';
import QAList from '../../components/organisms/QAList/QAList.jsx';

function mapStateToProps(state) {
  const d = state.dialogue;
  return {
    list : d.list,
    temp : d.temp,
    isOpenDeleteDialog : d.isOpenDeleteDialog,
    targetDeleteName : d.targetDeleteName,
    targetDeleteId : d.targetDeleteId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, dialogueActionCreators), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QAList);
