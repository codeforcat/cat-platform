import { take, call, put, select } from 'redux-saga/effects';
import * as entityActions from '../actions/entity';

export function* addSynonym() {
  while (true) {
    const action = yield take(entityActions.ADD_SYNONYM);
    yield put(entityActions.clearSynonymText(action.payload.value_idx));
  }
}
