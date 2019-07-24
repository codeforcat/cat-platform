import { fork, all } from 'redux-saga/effects';
import { initDialogue, fetchPageDialogue, searchDialogue, fetchAnswers, fetchEntities, createDialogue, setDialogue, updateDialogue, deleteDialogue } from './dialogue';
import { initEntity, fetchPageEntity, searchEntity, addSynonym, createEntity, setEntity, updateEntity, deleteEntity } from './entity';

export default function* rootSaga() {
  yield all([
    fork(initDialogue),
    fork(fetchPageDialogue),
    fork(searchDialogue),
    fork(fetchAnswers),
    fork(fetchEntities),
    fork(createDialogue),
    fork(setDialogue),
    fork(updateDialogue),
    fork(deleteDialogue),
    fork(initEntity),
    fork(fetchPageEntity),
    fork(searchEntity),
    fork(addSynonym),
    fork(createEntity),
    fork(setEntity),
    fork(updateEntity),
    fork(deleteEntity)
  ]);
}
