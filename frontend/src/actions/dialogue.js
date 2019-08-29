export const INIT_DIALOGUE = 'INIT_DIALOGUE';
export const FETCH_FIRST_DIALOGUE = 'FETCH_FIRST_DIALOGUE';
export const FETCH_LAST_DIALOGUE = 'FETCH_LAST_DIALOGUE';
export const FETCH_NEXT_DIALOGUE = 'FETCH_NEXT_DIALOGUE';
export const FETCH_PREVIOUS_DIALOGUE = 'FETCH_PREVIOUS_DIALOGUE';
export const FETCH_ENTITIES = 'FETCH_ENTITIES';
export const SET_ENTITIES = 'SET_ENTITIES';
export const INPUT_QUESTION_ID = 'INPUT_QUESTION_ID';
export const INPUT_QUESTION_NAME = 'INPUT_QUESTION_NAME';
export const INPUT_PHRASE_TEXT = 'INPUT_PHRASE_TEXT';
export const ADD_PHRASE_TEXT = 'ADD_PHRASE_TEXT';
export const DELETE_PHRASE_TEXT = 'DELETE_PHRASE_TEXT';
export const INPUT_ENTITY = 'INPUT_ENTITY';
export const CREATE_DIALOGUE = 'CREATE_DIALOGUE';
export const SET_DIALOGUE_STATE = 'SET_DIALOGUE_STATE';
export const SET_DIALOGUE = 'SET_DIALOGUE';
export const SET_DIALOGUE_ALL = 'SET_DIALOGUE_ALL';
export const UPDATE_DIALOGUE = 'UPDATE_DIALOGUE';
export const CLEAR_DIALOGUE = 'CLEAR_DIALOGUE';
export const FETCH_ERROR_DIALOGUE = 'FETCH_ERROR_DIALOGUE';
export const PRE_DELETE_DIALOGUE = 'PRE_DELETE_DIALOGUE';
export const DELETE_DIALOGUE = 'DELETE_DIALOGUE';
export const CLOSE_DELETE_DIALOG = 'CLOSE_DELETE_DIALOG';
export const SEARCH_DIALOGUE = 'SEARCH_DIALOGUE';
export const INPUT_RANDOM_STATE = 'INPUT_RANDOM_STATE';

export function initDialogue() {
  return {
    type: INIT_DIALOGUE
  }
}

export function setDialogueAll(data, current, next, previous, count) {
  return {
    type: SET_DIALOGUE_ALL,
    payload:{
      data: data,
      current: current,
      next: next,
      previous: previous,
      count: count
    }
  }
}

export function fetchFirstDialogue() {
  return {
    type: FETCH_FIRST_DIALOGUE
  }
}

export function fetchLastDialogue() {
  return {
    type: FETCH_LAST_DIALOGUE
  }
}

export function fetchNextDialogue(url) {
  return {
    type: FETCH_NEXT_DIALOGUE,
    payload:{
      url: url
    }
  }
}

export function fetchPreviousDialogue(url) {
  return {
    type: FETCH_PREVIOUS_DIALOGUE,
    payload:{
      url: url
    }
  }
}

export function fetchEntities() {
  return {
    type: FETCH_ENTITIES
  }
}

export function setEntities(entities) {
  return {
    type: SET_ENTITIES,
    payload:{
      exists_entities: entities
    }
  }
}

export function inputQuestionId(question_id) {
  return {
    type: INPUT_QUESTION_ID,
    payload:{
      question_id: parseInt(question_id)
    }
  }
}

export function inputQuestionName(question_name) {
  return {
    type: INPUT_QUESTION_NAME,
    payload:{
      question_name: question_name
    }
  }
}

export function inputPhraseText(phrase_text, idx) {
  return {
    type: INPUT_PHRASE_TEXT,
    payload:{
      phrase_text: phrase_text,
      idx: parseInt(idx)
    }
  }
}

export function addPhraseText() {
  return {
    type: ADD_PHRASE_TEXT
  }
}

export function deletePhraseText(idx, phrase_temp_idx) {
  return {
    type: DELETE_PHRASE_TEXT,
    payload:{
      idx: parseInt(idx),
      phrase_temp_idx: parseInt(phrase_temp_idx)
    }
  }
}

export function inputEntity(entity) {
  return {
    type: INPUT_ENTITY,
    payload:{
      entity: entity
    }
  }
}

export function createDialogue(question_name, phrases, entities, random) {
  return {
    type: CREATE_DIALOGUE,
    payload:{
      question_name: question_name,
      phrases: phrases,
      entities: entities,
      random: random
    }
  }
}

export function setDialogueState(question_id) {
  return {
    type: SET_DIALOGUE_STATE,
    payload:{
      question_id: parseInt(question_id)
    }
  }
}

export function setDialogue(question_name, phrases, entities, random) {
  return {
    type: SET_DIALOGUE,
    payload:{
      question_name: question_name,
      phrases: phrases,
      entities: entities,
      random: random
    }
  }
}

export function updateDialogue(question_id, question_name, phrases, entities, random) {
  return {
    type: UPDATE_DIALOGUE,
    payload:{
      question_id: parseInt(question_id),
      question_name: question_name,
      phrases: phrases,
      entities: entities,
      random: random
    }
  }
}

export function clearDialogue() {
  return {
    type: CLEAR_DIALOGUE
  }
}

/**
 * fetchに失敗したとき
 * @param error
 * @returns {{type: string, payload: {error: *}}}
 */
export function fetchDialogueError(error) {
  return {
    type: FETCH_ERROR_DIALOGUE,
    payload:{
      error: error
    }
  }
}

export function preDeleteDialogue(question_id, question_name) {
  return {
    type: PRE_DELETE_DIALOGUE,
    payload:{
      question_id: parseInt(question_id),
      question_name: question_name
    }
  }
}

export function deleteDialogue(question_id, current, count) {
  return {
    type: DELETE_DIALOGUE,
    payload:{
      question_id: parseInt(question_id),
      current: current,
      count: count
    }
  }
}

export function closeDeleteDialog() {
  return {
    type: CLOSE_DELETE_DIALOG
  }
}

export function searchDialogue(word) {
  return {
    type: SEARCH_DIALOGUE,
    payload:{
      word: word
    }
  }
}

export function inputRandomState(random) {
  return {
    type: INPUT_RANDOM_STATE,
    payload:{
      random: random
    }
  }
}
