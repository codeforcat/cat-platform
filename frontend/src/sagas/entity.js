import { take, call, put, select } from 'redux-saga/effects';
import * as entityActions from '../actions/entity';
import { showError } from '../actions/error';
import { getEntityState, setEntityTemp, isValidState } from '../selectors/entity';
import * as API from '../apis/API';

export function* addSynonym() {
  while (true) {
    const action = yield take(entityActions.ADD_SYNONYM);
    yield put(entityActions.clearSynonymText(action.payload.value_idx));
  }
}

export function* createEntity() {
  while (true) {
    const action = yield take(entityActions.CREATE_ENTITY);
    const state = yield select(getEntityState,action.payload);
    const isValid  = yield select(isValidState);
    if (isValid) {
      const { payload, error } = yield call(API.create,'entities',state.temp);
      yield call(_clearEntity,payload,error);
    }
    else {
      yield put(showError());
    }
  }
}

export function* setEntity() {
  while (true) {
    const action = yield take(entityActions.SET_ENTITY_STATE);
    const { payload, error } = yield call(API.set,'entities',action.payload.entity_id);
    if (payload && !error) {
      const data = yield select(setEntityTemp,payload);
      yield put(entityActions.setEntity(data.entity_name, data.values_temp, data.synonyms_temp));
    }
    else {
      yield put(entityActions.fetchEntityError(error.response.data.detail));
    }
  }
}

export function* updateEntity() {
  while (true) {
    const action = yield take(entityActions.UPDATE_ENTITY);
    const state = yield select(getEntityState,action.payload);
    console.log(state.temp);
    const isValid  = yield select(isValidState);
    if (isValid) {
      const { payload, error } = yield call(API.update,'entities',action.payload.entity_id,state.temp);
      yield call(_clearEntity,payload,error);
    }
    else {
      yield put(showError());
    }
  }
}

function* _clearEntity(api_payload,api_error) {
  if (api_payload && !api_error) {
    yield put(entityActions.clearEntity());
  }
  else {
    yield put(entityActions.fetchEntityError(api_error.response.data.detail));
  }
}
