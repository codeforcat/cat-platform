export const INIT_DIALOGUE = 'INIT_DIALOGUE';
export const FETCH_ANSWERS = 'FETCH_ANSWERS';
export const SET_ANSWERS = 'SET_ANSWERS';
export const INPUT_QUESTION_ID = 'INPUT_QUESTION_ID';
export const INPUT_QUESTION_NAME = 'INPUT_QUESTION_NAME';
export const INPUT_PARENT_ANSWER_ID = 'INPUT_PARENT_ANSWER_ID';
export const INPUT_PHRASE_TEXT = 'INPUT_PHRASE_TEXT';
export const ADD_PHRASE_TEXT = 'ADD_PHRASE_TEXT';
export const DELETE_PHRASE_TEXT = 'DELETE_PHRASE_TEXT';
export const INPUT_ANSWER_TEXT = 'INPUT_ANSWER_TEXT';
export const INPUT_ADDITIONAL_STATE = 'INPUT_ADDITIONAL_STATE';
export const INPUT_BUTTONS_NUMBER = 'INPUT_BUTTONS_NUMBER';
export const INPUT_BUTTONS_ALTTEXT = 'INPUT_BUTTONS_ALTTEXT';
export const INPUT_BUTTONS_TYPE = 'INPUT_BUTTONS_TYPE';
export const INPUT_BUTTONS_DATA = 'INPUT_BUTTONS_DATA';
export const INPUT_BUTTONS_LABEL = 'INPUT_BUTTONS_LABEL';
export const INPUT_BUTTONS_TEXT = 'INPUT_BUTTONS_TEXT';
export const CREATE_DIALOGUE = 'CREATE_DIALOGUE';
export const SET_DIALOGUE_STATE = 'SET_DIALOGUE_STATE';
export const SET_DIALOGUE = 'SET_DIALOGUE';
export const SET_DIALOGUE_ALL = 'SET_DIALOGUE_ALL';
export const UPDATE_DIALOGUE = 'UPDATE_DIALOGUE';
export const CLEAR_DIALOGUE = 'CLEAR_DIALOGUE';
export const FETCH_ERROR_DIALOGUE = 'FETCH_ERROR_DIALOGUE';

export function initDialogue() {
  return {
    type: INIT_DIALOGUE
  }
}

export function setDialogueAll(data) {
  return {
    type: SET_DIALOGUE_ALL,
    payload:{
      data: data
    }
  }
}

export function fetchAnswers() {
  return {
    type: FETCH_ANSWERS
  }
}

export function setAnswers(answers) {
  return {
    type: SET_ANSWERS,
    payload:{
      exists_answers: answers
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

export function inputParentAnswerId(parent_answer_id) {
  return {
    type: INPUT_PARENT_ANSWER_ID,
    payload:{
      parent_answer_id: parseInt(parent_answer_id)
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

export function inputAnswerText(answer_text, idx) {
  return {
    type: INPUT_ANSWER_TEXT,
    payload:{
      answer_text: answer_text,
      idx: parseInt(idx)
    }
  }
}

export function inputAdditionalState(state) {
  return {
    type: INPUT_ADDITIONAL_STATE,
    payload:{
      state: state
    }
  }
}

export function inputButtonsNumber(number) {
  return {
    type: INPUT_BUTTONS_NUMBER,
    payload:{
      number: parseInt(number)
    }
  }
}

export function inputButtonsAltText(altText) {
  return {
    type: INPUT_BUTTONS_ALTTEXT,
    payload:{
      altText: altText
    }
  }
}

export function inputButtonsType(type, idx) {
  return {
    type: INPUT_BUTTONS_TYPE,
    payload:{
      type: type,
      idx: parseInt(idx)
    }
  }
}

export function inputButtonsData(data, idx) {
  return {
    type: INPUT_BUTTONS_DATA,
    payload:{
      data: data,
      idx: parseInt(idx)
    }
  }
}

export function inputButtonsLabel(label, idx) {
  return {
    type: INPUT_BUTTONS_LABEL,
    payload:{
      label: label,
      idx: parseInt(idx)
    }
  }
}

export function inputButtonsText(text, idx) {
  return {
    type: INPUT_BUTTONS_TEXT,
    payload:{
      text: text,
      idx: parseInt(idx)
    }
  }
}

export function createDialogue(question_name, parent_answer_id, phrases, answers) {
  return {
    type: CREATE_DIALOGUE,
    payload:{
      question_name: question_name,
      parent_answer_id: parseInt(parent_answer_id),
      phrases: phrases,
      answers: answers
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

export function setDialogue(question_name, parent_answer_id, phrases, answers) {
  return {
    type: SET_DIALOGUE,
    payload:{
      question_name: question_name,
      parent_answer_id: parseInt(parent_answer_id),
      phrases: phrases,
      answers: answers
    }
  }
}

export function updateDialogue(question_id, question_name, parent_answer_id, phrases, answers) {
  return {
    type: UPDATE_DIALOGUE,
    payload:{
      question_id: parseInt(question_id),
      question_name: question_name,
      parent_answer_id: parseInt(parent_answer_id),
      phrases: phrases,
      answers: answers
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
