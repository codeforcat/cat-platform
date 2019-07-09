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
    }
  ],
  additional_state: 'none',
  buttons_number: 1,
  buttons: {
    type: 'template',
    altText: '',
    template: {
      type: 'buttons',
      text: '',
      actions: [
        {
          type: 'message'
        }
      ]
    }
  },
  confirm: {
    type: 'template',
    altText: '',
    template: {
      type: 'confirm',
      text: '',
      actions: [
        {
          type: 'message'
        },
        {
          type: 'message'
        }
      ]
    }
  },
  image: {
    type: 'image',
    originalContentUrl: '',
    previewImageUrl: ''
  },
  temp: {
    question_name: '',
    parent_answer_id: -1,
    phrases: [],
    answers: [],
    additional_state: 'none',
    additional_message: null
  },
  list: [],
  isUpdateStateEnable: false,
  isShowError: false,
  apiErrorMsg: '',
  errorMsg: {
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
    case actionTypes.SET_DIALOGUE_ALL:
      return Object.assign({},state,{list: action.payload.data});
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
      return Object.assign({},state,{additional_state: action.payload.state});
    case actionTypes.INPUT_BUTTONS_NUMBER:
      const array_number = action.payload.number - state.buttons.template.actions.length;
      const actions_array = array_number >= 0 ? new Array(array_number).fill({type: 'message'}) : [];
      const merged_actions_array = array_number >= 0 ? [...state.buttons.template.actions, ...actions_array] : state.buttons.template.actions.slice(0, action.payload.number);
      const new_template_actions = Object.assign({}, state.buttons.template, {actions: merged_actions_array});
      const new_buttons_template = Object.assign({}, state.buttons, {template: new_template_actions});
      return Object.assign({},state,{buttons_number: action.payload.number, buttons: new_buttons_template});
    case actionTypes.INPUT_BUTTONS_ALTTEXT:
      const new_buttons_template_text = Object.assign({}, state.buttons.template, {text: action.payload.altText});
      const new_buttons_altText = Object.assign({}, state.buttons, {altText: action.payload.altText, template: new_buttons_template_text});
      return Object.assign({},state,{buttons: new_buttons_altText});
    case actionTypes.INPUT_BUTTONS_TYPE:
      const makeButtonsTypeState = (state,index,inputData) => {
        const buttons_actions = state.buttons.template.actions;
        const new_actions = [
          ...buttons_actions.slice(0, index),
          Object.assign({}, buttons_actions[index], {type: inputData}),
          ...buttons_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.buttons.template, {actions: new_actions});
        const new_buttons = Object.assign({}, state.buttons, {template: new_template});
        return Object.assign({},state,{buttons: new_buttons})
      };
      return makeButtonsTypeState(state,action.payload.idx,action.payload.type);
    case actionTypes.INPUT_BUTTONS_DATA:
      const makeButtonsDataState = (state,index,inputData) => {
        const buttons_actions = state.buttons.template.actions;
        const new_actions = [
          ...buttons_actions.slice(0, index),
          Object.assign({}, buttons_actions[index], {data: inputData}),
          ...buttons_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.buttons.template, {actions: new_actions});
        const new_buttons = Object.assign({}, state.buttons, {template: new_template});
        return Object.assign({},state,{buttons: new_buttons})
      };
      return makeButtonsDataState(state,action.payload.idx,action.payload.data);
    case actionTypes.INPUT_BUTTONS_LABEL:
      const makeButtonsLabelState = (state,index,inputData) => {
        const buttons_actions = state.buttons.template.actions;
        const new_actions = [
          ...buttons_actions.slice(0, index),
          Object.assign({}, buttons_actions[index], {label: inputData}),
          ...buttons_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.buttons.template, {actions: new_actions});
        const new_buttons = Object.assign({}, state.buttons, {template: new_template});
        return Object.assign({},state,{buttons: new_buttons})
      };
      return makeButtonsLabelState(state,action.payload.idx,action.payload.label);
    case actionTypes.INPUT_BUTTONS_TEXT:
      const makeButtonsTextState = (state,index,inputData) => {
        const buttons_actions = state.buttons.template.actions;
        const new_actions = [
          ...buttons_actions.slice(0, index),
          Object.assign({}, buttons_actions[index], buttons_actions[index].type === 'message' ? {text: inputData} : {displayText: inputData}),
          ...buttons_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.buttons.template, {actions: new_actions});
        const new_buttons = Object.assign({}, state.buttons, {template: new_template});
        return Object.assign({},state,{buttons: new_buttons})
      };
      return makeButtonsTextState(state,action.payload.idx,action.payload.text);
    case actionTypes.INPUT_CONFIRM_ALTTEXT:
      const new_confirm_template_text = Object.assign({}, state.confirm.template, {text: action.payload.altText});
      const new_confirm_altText = Object.assign({}, state.confirm, {altText: action.payload.altText, template: new_confirm_template_text});
      return Object.assign({},state,{confirm: new_confirm_altText});
    case actionTypes.INPUT_CONFIRM_TYPE:
      const makeConfirmTypeState = (state,index,inputData) => {
        const confirm_actions = state.confirm.template.actions;
        const new_actions = [
          ...confirm_actions.slice(0, index),
          Object.assign({}, confirm_actions[index], {type: inputData}),
          ...confirm_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.confirm.template, {actions: new_actions});
        const new_confirm = Object.assign({}, state.confirm, {template: new_template});
        return Object.assign({},state,{confirm: new_confirm})
      };
      return makeConfirmTypeState(state,action.payload.idx,action.payload.type);
    case actionTypes.INPUT_CONFIRM_DATA:
      const makeConfirmDataState = (state,index,inputData) => {
        const confirm_actions = state.confirm.template.actions;
        const new_actions = [
          ...confirm_actions.slice(0, index),
          Object.assign({}, confirm_actions[index], {data: inputData}),
          ...confirm_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.confirm.template, {actions: new_actions});
        const new_confirm = Object.assign({}, state.confirm, {template: new_template});
        return Object.assign({},state,{confirm: new_confirm})
      };
      return makeConfirmDataState(state,action.payload.idx,action.payload.data);
    case actionTypes.INPUT_CONFIRM_LABEL:
      const makeConfirmLabelState = (state,index,inputData) => {
        const confirm_actions = state.confirm.template.actions;
        const new_actions = [
          ...confirm_actions.slice(0, index),
          Object.assign({}, confirm_actions[index], {label: inputData}),
          ...confirm_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.confirm.template, {actions: new_actions});
        const new_confirm = Object.assign({}, state.confirm, {template: new_template});
        return Object.assign({},state,{confirm: new_confirm})
      };
      return makeConfirmLabelState(state,action.payload.idx,action.payload.label);
    case actionTypes.INPUT_CONFIRM_TEXT:
      const makeConfirmTextState = (state,index,inputData) => {
        const confirm_actions = state.confirm.template.actions;
        const new_actions = [
          ...confirm_actions.slice(0, index),
          Object.assign({}, confirm_actions[index], confirm_actions[index].type === 'message' ? {text: inputData} : {displayText: inputData}),
          ...confirm_actions.slice(index + 1)
        ];
        const new_template = Object.assign({}, state.confirm.template, {actions: new_actions});
        const new_confirm = Object.assign({}, state.confirm, {template: new_template});
        return Object.assign({},state,{confirm: new_confirm})
      };
      return makeConfirmTextState(state,action.payload.idx,action.payload.text);
    case actionTypes.INPUT_IMAGE_ORIGINAL:
      const new_image_original = Object.assign({}, state.image, {originalContentUrl: action.payload.url});
      return Object.assign({},state,{image: new_image_original});
    case actionTypes.INPUT_IMAGE_PREVIEW:
      const new_image_preview = Object.assign({}, state.image, {previewImageUrl: action.payload.url});
      return Object.assign({},state,{image: new_image_preview});
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
            isValid: false
          }
        ],
        additional_state: 'none',
        buttons_number: 1,
        buttons: {
          type: 'template',
          altText: '',
          template: {
            type: 'buttons',
            text: '',
            actions: [
              {
                type: 'message'
              }
            ]
          }
        },
        confirm: {
          type: 'template',
          altText: '',
          template: {
            type: 'confirm',
            text: '',
            actions: [
              {
                type: 'message'
              },
              {
                type: 'message'
              }
            ]
          }
        },
        image: {
          type: 'image',
          originalContentUrl: '',
          previewImageUrl: ''
        },
        temp: {
          question_name: '',
          parent_answer_id: -1,
          phrases: [],
          answers: [],
          additional_state: 'none',
          additional_message: null
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
