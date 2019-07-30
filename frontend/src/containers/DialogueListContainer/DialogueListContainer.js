import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogueActionCreators from '../../actions/dialogue';
import DialogueList from '../../components/organisms/DialogueList/DialogueList.jsx';

function mapStateToProps(state) {
  const d = state.dialogue;
  return {
    current: d.current,
    next : d.next,
    previous: d.previous,
    count: d.count,
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

export default connect(mapStateToProps, mapDispatchToProps)(DialogueList);
