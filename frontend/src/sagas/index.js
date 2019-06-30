import { fork, all } from 'redux-saga/effects';
import { fetchAnswers, createDialogue, setDialogue, updateDialogue } from './dialogue';
import { initEntity, addSynonym, createEntity, setEntity, updateEntity } from './entity';

export default function* rootSaga() {
  yield all([
    fork(fetchAnswers),
    fork(createDialogue),
    fork(setDialogue),
    fork(updateDialogue),
    fork(initEntity),
    fork(addSynonym),
    fork(createEntity),
    fork(setEntity),
    fork(updateEntity)
  ]);
}
