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
export const CREATE_DIALOGUE = 'CREATE_DIALOGUE';
export const SET_DIALOGUE_STATE = 'SET_DIALOGUE_STATE';
export const SET_DIALOGUE = 'SET_DIALOGUE';
export const UPDATE_DIALOGUE = 'UPDATE_DIALOGUE';
export const CLEAR_DIALOGUE = 'CLEAR_DIALOGUE';
export const FETCH_ERROR_DIALOGUE = 'FETCH_ERROR_DIALOGUE';

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

export function inputAdditionalState(state, idx) {
  return {
    type: INPUT_ADDITIONAL_STATE,
    payload:{
      state: state,
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
