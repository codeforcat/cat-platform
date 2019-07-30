export const INIT_ENTITY = 'INIT_ENTITY';
export const FETCH_FIRST_ENTITY = 'FETCH_FIRST_ENTITY';
export const FETCH_LAST_ENTITY = 'FETCH_LAST_ENTITY';
export const FETCH_NEXT_ENTITY = 'FETCH_NEXT_ENTITY';
export const FETCH_PREVIOUS_ENTITY = 'FETCH_PREVIOUS_ENTITY';
export const INPUT_ENTITY_ID = 'INPUT_ENTITY_ID';
export const INPUT_ENTITY_NAME = 'INPUT_ENTITY_NAME';
export const INPUT_VALUE_TEXT = 'INPUT_VALUE_TEXT';
export const ADD_VALUE = 'ADD_VALUE';
export const DELETE_VALUE = 'DELETE_VALUE';
export const INPUT_SYNONYM_TEXT = 'INPUT_SYNONYM_TEXT';
export const CLEAR_SYNONYM_TEXT = 'CLEAR_SYNONYM_TEXT';
export const ADD_SYNONYM = 'ADD_SYNONYM';
export const DELETE_SYNONYM = 'DELETE_SYNONYM';
export const CREATE_ENTITY = 'CREATE_ENTITY';
export const SET_ENTITY_STATE = 'SET_ENTITY_STATE';
export const SET_ENTITY = 'SET_ENTITY';
export const SET_ENTITY_ALL = 'SET_ENTITY_ALL';
export const UPDATE_ENTITY = 'UPDATE_ENTITY';
export const CLEAR_ENTITY = 'CLEAR_ENTITY';
export const FETCH_ERROR_ENTITY = 'FETCH_ERROR_ENTITY';
export const PRE_DELETE_ENTITY = 'PRE_DELETE_ENTITY';
export const DELETE_ENTITY = 'DELETE_ENTITY';
export const CLOSE_DELETE_DIALOG = 'CLOSE_DELETE_DIALOG';
export const SEARCH_ENTITY = 'SEARCH_ENTITY';

export function initEntity() {
  return {
    type: INIT_ENTITY
  }
}

export function setEntityAll(data, current, next, previous, count) {
  return {
    type: SET_ENTITY_ALL,
    payload:{
      data: data,
      current: current,
      next: next,
      previous: previous,
      count: count
    }
  }
}

export function fetchFirstEntity() {
  return {
    type: FETCH_FIRST_ENTITY
  }
}

export function fetchLastEntity() {
  return {
    type: FETCH_LAST_ENTITY
  }
}

export function fetchNextEntity(url) {
  return {
    type: FETCH_NEXT_ENTITY,
    payload:{
      url: url
    }
  }
}

export function fetchPreviousEntity(url) {
  return {
    type: FETCH_PREVIOUS_ENTITY,
    payload:{
      url: url
    }
  }
}

export function inputEntityId(entity_id) {
  return {
    type: INPUT_ENTITY_ID,
    payload:{
      entity_id: parseInt(entity_id)
    }
  }
}

export function inputEntityName(entity_name) {
  return {
    type: INPUT_ENTITY_NAME,
    payload:{
      entity_name: entity_name
    }
  }
}

export function inputValueText(value_text, idx) {
  return {
    type: INPUT_VALUE_TEXT,
    payload:{
      value_text: value_text,
      idx: parseInt(idx)
    }
  }
}

export function addValue() {
  return {
    type: ADD_VALUE
  }
}

export function deleteValue(idx, value_temp_idx) {
  return {
    type: DELETE_VALUE,
    payload:{
      idx: parseInt(idx),
      value_temp_idx: parseInt(value_temp_idx)
    }
  }
}

export function inputSynonymText(synonym_temp_text, value_idx) {
  return {
    type: INPUT_SYNONYM_TEXT,
    payload:{
      synonym_temp_text: synonym_temp_text,
      idx: parseInt(value_idx)
    }
  }
}

export function clearSynonymText(value_idx) {
  return {
    type: CLEAR_SYNONYM_TEXT,
    payload:{
      idx: parseInt(value_idx)
    }
  }
}


export function addSynonym(synonym_text, value_idx) {
  return {
    type: ADD_SYNONYM,
    payload:{
      synonym_text: synonym_text,
      value_idx: parseInt(value_idx)
    }
  }
}

export function deleteSynonym(idx, value_idx) {
  return {
    type: DELETE_SYNONYM,
    payload:{
      idx: parseInt(idx),
      value_idx: parseInt(value_idx)
    }
  }
}

export function createEntity(entity_name, values, synonyms) {
  return {
    type: CREATE_ENTITY,
    payload:{
      entity_name: entity_name,
      values: values,
      synonyms: synonyms
    }
  }
}

export function setEntityState(entity_id) {
  return {
    type: SET_ENTITY_STATE,
    payload:{
      entity_id: parseInt(entity_id)
    }
  }
}

export function setEntity(entity_name, values, synonyms) {
  return {
    type: SET_ENTITY,
    payload:{
      entity_name: entity_name,
      values: values,
      synonyms: synonyms
    }
  }
}

export function updateEntity(entity_id, entity_name, values, synonyms) {
  return {
    type: UPDATE_ENTITY,
    payload:{
      entity_id: parseInt(entity_id),
      entity_name: entity_name,
      values: values,
      synonyms: synonyms
    }
  }
}

export function clearEntity() {
  return {
    type: CLEAR_ENTITY
  }
}

/**
 * fetchに失敗したとき
 * @param error
 * @returns {{type: string, payload: {error: *}}}
 */
export function fetchEntityError(error) {
  return {
    type: FETCH_ERROR_ENTITY,
    payload:{
      error: error
    }
  }
}

export function preDeleteEntity(entity_id, entity_name) {
  return {
    type: PRE_DELETE_ENTITY,
    payload:{
      entity_id: parseInt(entity_id),
      entity_name: entity_name
    }
  }
}

export function deleteEntity(entity_id, current, count) {
  return {
    type: DELETE_ENTITY,
    payload:{
      entity_id: parseInt(entity_id),
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

export function searchEntity(word) {
  return {
    type: SEARCH_ENTITY,
    payload:{
      word: word
    }
  }
}
