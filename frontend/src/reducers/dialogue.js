import * as actionTypes from '../actions/dialogue';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  question_id: 0,
  question_name: '',
  isValid: false,
  errorCode: 'question_empty_error',
  parent_answer_id: -1,
  exists_answers: [],
  phrases: [
    {
      phrase_temp_id: 0,
      phrase_text: '',
      isValid: false,
      errorCode: 'phrase_empty_error'
    }
  ],
  answers: [
    {
      answer_text: '',
      isValid: false,
      errorCode: 'answer_empty_error',
      additional_state: 'none',
      additional_message: null
    }
  ],
  temp:{
    question_name: '',
    parent_answer_id: -1,
    phrases: [],
    answers: []
  },
  isUpdateStateEnable: false,
  isShowError: false,
  apiErrorMsg: '',
  errorMsg:{
    question_empty_error: '入力してください',
    phrase_empty_error: '入力してください',
    answer_empty_error: '入力してください'
  }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState,action) {
  switch (action.type){
    case actionTypes.SET_DIALOGUE_STATE:
      return Object.assign({},state,{isUpdateStateEnable: true});
    case actionTypes.SET_DIALOGUE:
      return Object.assign({},state,{
        question_name: action.payload.question_name,
        parent_answer_id: action.payload.parent_answer_id,
        phrases: action.payload.phrases,
        answers: action.payload.answers,
        isValid: action.payload.question_name !== ''
      });
    case actionTypes.SET_ANSWERS:
      return Object.assign({},state,{exists_answers: action.payload.exists_answers});
    case actionTypes.INPUT_QUESTION_ID:
      return Object.assign({},state,{question_id: action.payload.question_id});
    case actionTypes.INPUT_QUESTION_NAME:
      return Object.assign({},state,{question_name: action.payload.question_name, isValid: action.payload.question_name !== ''});
    case actionTypes.INPUT_PARENT_ANSWER_ID:
      return Object.assign({},state,{parent_answer_id: action.payload.parent_answer_id});
    case actionTypes.INPUT_PHRASE_TEXT:
      const makePhraseState = (state,index,inputData) => {
        const new_list = [
          ...state.phrases.slice(0, index),
          Object.assign({}, state.phrases[index], {phrase_text: inputData, isValid: index === 0 ? inputData !== '' : false}),
          ...state.phrases.slice(index + 1)
        ];
        return Object.assign({},state,{
          phrases: new_list
        })
      };
      return makePhraseState(state,action.payload.idx,action.payload.phrase_text);
    case actionTypes.ADD_PHRASE_TEXT:
      const phrase_temp_index = Math.max(...state.phrases.map((value) => value.phrase_temp_id)) + 1;
      return Object.assign({},state,{
        phrases:[
          ...state.phrases,
          {phrase_temp_id: phrase_temp_index, phrase_text: '', isValid: false, errorCode: 'phrase_empty_error'}
        ]
      });
    case actionTypes.DELETE_PHRASE_TEXT:
      return state.phrases.length > 1 ? Object.assign({},state,{
        phrases:[
          ...state.phrases.slice(0,action.payload.idx),
          ...state.phrases.slice(action.payload.idx + 1),
        ]
        })
      : Object.assign({},state,{
        phrases:[
          {phrase_temp_id: action.payload.phrase_temp_idx, phrase_text: '', isValid: false, errorCode: 'phrase_empty_error'}
        ]
      });
    case actionTypes.INPUT_ANSWER_TEXT:
      const makeAnswerTextState = (state,index,inputData) => {
        const new_list = [
          ...state.answers.slice(0, index),
          Object.assign({}, state.answers[index], {answer_text: inputData, isValid: index === 0 ? inputData !== '' : false}),
          ...state.answers.slice(index + 1)
        ];
        return Object.assign({},state,{
          answers: new_list
        })
      };
      return makeAnswerTextState(state,action.payload.idx,action.payload.answer_text);
    case actionTypes.INPUT_ADDITIONAL_STATE:
      const makeAdditionalStateState = (state,index,inputData) => {
        let additional_message;
        switch (inputData) {
          case 'none':
            additional_message = {};
        }
        const new_list = [
          ...state.answers.slice(0, index),
          Object.assign({}, state.answers[index], {additional_state: inputData, additional_message: additional_message}),
          ...state.answers.slice(index + 1)
        ];
        return Object.assign({},state,{
          answers: new_list
        })
      };
      return makeAdditionalStateState(state,action.payload.idx,action.payload.state);
    case actionTypes.CLEAR_DIALOGUE:
      return Object.assign({},state,{
        question_id: 0,
        question_name: '',
        isValid: false,
        parent_answer_id: -1,
        exists_answers: [],
        phrases: [
          {
            phrase_temp_id: 0,
            phrase_text: '',
            isValid: false
          }
        ],
        answers: [
          {
            answer_text: '',
            isValid: false,
            additional_state: 'none',
            additional_message: null
          }
        ],
        temp:{
          question_name: '',
          parent_answer_id: -1,
          phrases: [],
          answers: []
        },
        isUpdateStateEnable: false,
        isShowError: false,
        apiErrorMsg: ''
      });
    case actionTypes.FETCH_ERROR_DIALOGUE:
      return Object.assign({},state,{apiErrorMsg: action.payload.error});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
