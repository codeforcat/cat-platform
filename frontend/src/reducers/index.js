import { combineReducers } from 'redux';
import dialogue from './dialogue';
import entity from './entity';
import payload from './payload';

const rootReducer = combineReducers({
  dialogue,
  entity,
  payload
});

export default rootReducer;
