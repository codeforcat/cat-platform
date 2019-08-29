import { take, call, put, select, all } from 'redux-saga/effects';
import * as dialogueActions from '../actions/dialogue';
import * as payloadActions from '../actions/payload';
import { showError } from '../actions/error';
import { setDialogueList, getDialogueState, setDialogueTemp, isValidState, getPage } from '../selectors/dialogue';
import { createPayloadArray, isValidPayloadState, setPayloadTemp } from '../selectors/payload';
import * as API from '../apis/API';

export function* initDialogue() {
  while (true) {
    yield take(dialogueActions.INIT_DIALOGUE);
    const { payload, error } = yield call(API.read,'questions');
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

export function* fetchFirstDialogue() {
  while (true) {
    yield take(dialogueActions.FETCH_FIRST_DIALOGUE);
    const { payload, error } = yield call(API.readPage,'questions', 1);
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

export function* fetchLastDialogue() {
  while (true) {
    yield take(dialogueActions.FETCH_LAST_DIALOGUE);
    const { payload, error } = yield call(API.readPage,'questions', 'last');
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

export function* fetchNextDialogue() {
  while (true) {
    const action = yield take(dialogueActions.FETCH_NEXT_DIALOGUE);
    const { payload, error } = yield call(API.fetchUrl,action.payload.url);
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

export function* fetchPreviousDialogue() {
  while (true) {
    const action = yield take(dialogueActions.FETCH_PREVIOUS_DIALOGUE);
    const { payload, error } = yield call(API.fetchUrl,action.payload.url);
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

export function* searchDialogue() {
  while (true) {
    const action = yield take(dialogueActions.SEARCH_DIALOGUE);
    const { payload, error } =yield call(API.search,'questions',action.payload.word);
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

export function* fetchEntities() {
  while (true) {
    yield take(dialogueActions.FETCH_ENTITIES);
    const { payload, error } = yield call(API.read,'entities');
    yield put(dialogueActions.setEntities(payload.results));
  }
}

export function* createDialogue() {
  while (true) {
    const action = yield take(dialogueActions.CREATE_DIALOGUE);
    const payloadArray = yield select(createPayloadArray);
    const { isValidJson, validArray } = yield select(isValidPayloadState, payloadArray);
    yield put(payloadActions.setPayloadError(validArray));
    const isValid  = yield select(isValidState);
    if (isValid && isValidJson) {
      const state = yield select(getDialogueState, action.payload, payloadArray);
      const { payload, error } = yield call(API.create,'questions',state.temp);
      yield call(_clearDialogue,payload,error);
    }
    else {
      yield put(showError());
    }
  }
}

export function* setDialogue() {
  while (true) {
    const action = yield take(dialogueActions.SET_DIALOGUE_STATE);
    const { payload, error } = yield call(API.set,'questions',action.payload.question_id);
    if (payload && !error) {
      const data = yield select(setDialogueTemp, payload);
      const payloadArray = yield select(setPayloadTemp, payload.payloads);
      yield all([
        put(dialogueActions.setDialogue(
          data.question_name,
          data.phrases,
          data.entities,
          data.random
        )),
        put(payloadActions.setPayload(payloadArray))
      ]);
    }
    else {
      yield put(dialogueActions.fetchDialogueError(error.response.data.detail));
    }
  }
}

export function* updateDialogue() {
  while (true) {
    const action = yield take(dialogueActions.UPDATE_DIALOGUE);
    const payloadArray = yield select(createPayloadArray);
    const { isValidJson, validArray } = yield select(isValidPayloadState, payloadArray);
    yield put(payloadActions.setPayloadError(validArray));
    const isValid  = yield select(isValidState);
    if (isValid && isValidJson) {
      const state = yield select(getDialogueState, action.payload, payloadArray);
      const { payload, error } = yield call(API.update,'questions',action.payload.question_id,state.temp);
      yield call(_clearDialogue,payload,error);
    }
    else {
      yield put(showError());
    }
  }
}

export function* deleteDialogue() {
  while (true) {
    const action = yield take(dialogueActions.DELETE_DIALOGUE);
    yield call(API.destroy,'questions',action.payload.question_id);
    yield put(dialogueActions.closeDeleteDialog());
    const page = yield select(getPage,action.payload);
    const { payload, error } = yield call(API.readPage,'questions',page);
    const data = yield select(setDialogueList,payload.results);
    yield put(dialogueActions.setDialogueAll(data, payload.current, payload.next, payload.previous, payload.countItemOnPage));
  }
}

function* _clearDialogue(api_payload,api_error) {
  if (api_payload && !api_error) {
    yield all([
      put(dialogueActions.clearDialogue()),
      put(payloadActions.clearPayload())
    ]);
  }
  else {
    yield put(dialogueActions.fetchDialogueError(api_error.response.data.question_name[0]));
  }
}

// function* _searchWordToReadAPI(repository,action) {
//   const searchWord = yield select(getSearchWord);
//   const { payload, error } = searchWord === '' ?
//     yield call(API.read,repository,action.payload.page) :
//     yield call(API.readWord,repository,searchWord,action.payload.page);
//   return { payload, error };
// }
