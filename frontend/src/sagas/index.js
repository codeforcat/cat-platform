import { fork, all } from 'redux-saga/effects';
import { initDialogue, fetchFirstDialogue, fetchLastDialogue, fetchNextDialogue, fetchPreviousDialogue, searchDialogue, fetchAnswers, fetchEntities, createDialogue, setDialogue, updateDialogue, deleteDialogue } from './dialogue';
import { initEntity, fetchFirstEntity, fetchLastEntity, fetchNextEntity, fetchPreviousEntity, searchEntity, addSynonym, createEntity, setEntity, updateEntity, deleteEntity } from './entity';

export default function* rootSaga() {
  yield all([
    fork(initDialogue),
    fork(fetchFirstDialogue),
    fork(fetchLastDialogue),
    fork(fetchNextDialogue),
    fork(fetchPreviousDialogue),
    fork(searchDialogue),
    fork(fetchAnswers),
    fork(fetchEntities),
    fork(createDialogue),
    fork(setDialogue),
    fork(updateDialogue),
    fork(deleteDialogue),
    fork(initEntity),
    fork(fetchFirstEntity),
    fork(fetchLastEntity),
    fork(fetchNextEntity),
    fork(fetchPreviousEntity),
    fork(searchEntity),
    fork(addSynonym),
    fork(createEntity),
    fork(setEntity),
    fork(updateEntity),
    fork(deleteEntity)
  ]);
}
