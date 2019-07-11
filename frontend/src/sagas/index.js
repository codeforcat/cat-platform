import { fork, all } from 'redux-saga/effects';
import { initDialogue, fetchAnswers, createDialogue, setDialogue, updateDialogue, deleteDialogue } from './dialogue';
import { initEntity, addSynonym, createEntity, setEntity, updateEntity, deleteEntity } from './entity';

export default function* rootSaga() {
  yield all([
    fork(initDialogue),
    fork(fetchAnswers),
    fork(createDialogue),
    fork(setDialogue),
    fork(updateDialogue),
    fork(deleteDialogue),
    fork(initEntity),
    fork(addSynonym),
    fork(createEntity),
    fork(setEntity),
    fork(updateEntity),
    fork(deleteEntity)
  ]);
}
