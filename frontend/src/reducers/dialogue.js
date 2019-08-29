import * as actionTypes from '../actions/dialogue';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  question_id: 0,
  question_name: '',
  isValid: false,
  errorCode: 'question_empty_error',
  entities: [],
  exists_entities: [],
  phrases: [
    {
      phrase_temp_id: 0,
      phrase_text: '',
      isValid: false,
      errorCode: 'phrase_empty_error'
    }
  ],
  random: false,
  temp: {
    question_name: '',
    phrases: [],
    entities: [],
    random: false,
    payloads: []
  },
  list: [],
  current: 1,
  next: null,
  previous: null,
  count: 0,
  isUpdateStateEnable: false,
  isOpenDeleteDialog: false,
  targetDeleteName: '',
  targetDeleteId: 0,
  isShowError: false,
  apiErrorMsg: '',
  errorMsg: {
    question_empty_error: '入力してください',
    phrase_empty_error: '入力してください'
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
        phrases: action.payload.phrases,
        entities: action.payload.entities,
        random: action.payload.random,
        isValid: action.payload.question_name !== ''
      });
    case actionTypes.SET_DIALOGUE_ALL:
      return Object.assign({},state,{
        list: action.payload.data,
        current: action.payload.current,
        next: action.payload.next,
        previous: action.payload.previous,
        count: action.payload.count
      });
    case actionTypes.SET_ENTITIES:
      return Object.assign({},state,{exists_entities: action.payload.exists_entities});
    case actionTypes.INPUT_QUESTION_ID:
      return Object.assign({},state,{question_id: action.payload.question_id});
    case actionTypes.INPUT_QUESTION_NAME:
      return Object.assign({},state,{question_name: action.payload.question_name, isValid: action.payload.question_name !== ''});
    case actionTypes.INPUT_ENTITY:
      const last = action.payload.entity.slice(-1)[0];
      const sameEntities = action.payload.entity.filter((value, i) => value.entity_id === last.entity_id);
      const filteredEntities = action.payload.entity.filter((value, i) => value.entity_id !== last.entity_id);
      return Object.assign({},state,{entities: sameEntities.length > 1 ? filteredEntities : action.payload.entity});
    case actionTypes.INPUT_PHRASE_TEXT:
      const makePhraseState = (state,index,inputData) => {
        const new_list = [
          ...state.phrases.slice(0, index),
          Object.assign({}, state.phrases[index], {phrase_text: inputData, isValid: inputData !== ''}),
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
    case actionTypes.CLEAR_DIALOGUE:
      return Object.assign({},state,{
        question_id: 0,
        question_name: '',
        isValid: false,
        entities: [],
        exists_entities: [],
        phrases: [
          {
            phrase_temp_id: 0,
            phrase_text: '',
            isValid: false
          }
        ],
        random: false,
        temp: {
          question_name: '',
          phrases: [],
          entities: [],
          random: false,
          payloads: []
        },
        isUpdateStateEnable: false,
        isOpenDeleteDialog: false,
        targetDeleteName: '',
        targetDeleteId: 0,
        isShowError: false,
        apiErrorMsg: ''
      });
    case actionTypes.FETCH_ERROR_DIALOGUE:
      return Object.assign({},state,{apiErrorMsg: action.payload.error});
    case actionTypes.PRE_DELETE_DIALOGUE:
      return Object.assign({},state,{
        isOpenDeleteDialog: true,
        targetDeleteName: action.payload.question_name,
        targetDeleteId: action.payload.question_id
      });
    case actionTypes.CLOSE_DELETE_DIALOG:
      return Object.assign({},state,{
        isOpenDeleteDialog: false,
        targetDeleteName: '',
        targetDeleteId: 0
      });
    case actionTypes.INPUT_RANDOM_STATE:
      return Object.assign({},state,{random: action.payload.random});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
