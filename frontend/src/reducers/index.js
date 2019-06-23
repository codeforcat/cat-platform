import { combineReducers } from 'redux';
import dialogue from './dialogue';
import entity from './entity';

const rootReducer = combineReducers({
  dialogue,
  entity
});

export default rootReducer;
