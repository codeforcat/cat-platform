import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as entityActionCreators from '../../actions/entity';
import EntityList from '../../components/organisms/EntityList/EntityList.jsx';

function mapStateToProps(state) {
  const e = state.entity;
  return {
    current: e.current,
    next : e.next,
    previous: e.previous,
    count: e.count,
    list : e.list,
    temp : e.temp,
    isOpenDeleteDialog : e.isOpenDeleteDialog,
    targetDeleteName : e.targetDeleteName,
    targetDeleteId : e.targetDeleteId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, entityActionCreators), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityList);
