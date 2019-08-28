import * as actionTypes from '../actions/payload';
import {
  SHOW_ERROR
} from '../actions/error';
import produce from 'immer';

const contents = {
  state: 'none',
  isValid: false,
  errorCode: 'payload_empty_error',
  text: '',
  buttonsNumber: 1,
  buttonsAltText: '',
  buttonsActions: [
    {
      type: 'message',
      label: '',
      text: '',
      displayText: '',
      data: ''
    }
  ],
  confirmAltText: '',
  confirmActions: [
    {
      type: 'message',
      label: '',
      text: '',
      displayText: '',
      data: ''
    },
    {
      type: 'message',
      label: '',
      text: '',
      displayText: '',
      data: ''
    }
  ],
  originalContentUrl: '',
  previewImageUrl: ''
};

const initialState = {
  payloads: [
    {
      payloadTempId: 0,
      contents: contents
    }
  ],
  isShowError: false,
  errorMsg: {
    payload_empty_error: 'このpayloadのすべての欄に入力してください'
  }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
const payloadReducer = (state = initialState, action) =>
	produce(state, draft => {
    switch (action.type){
      case actionTypes.INPUT_PAYLOAD_STATE:
        draft.payloads[action.payload.idx].contents.state = action.payload.state;
        return;
      case actionTypes.ADD_PAYLOAD_STATE:
        const payloadTempIndex = Math.max(...state.payloads.map((value) => value.payloadTempId)) + 1;
        draft.payloads.push({
          payloadTempId: payloadTempIndex,
          contents: contents
        });
        return;
      case actionTypes.DELETE_PAYLOAD_STATE:
        draft.payloads.splice(draft.payloads.findIndex(elm => elm.payloadTempId === action.payload.payloadTempIdx), 1);
        return;
      case actionTypes.SORT_PAYLOAD_STATE:
        draft.payloads = action.payload.array;
        return;
      case actionTypes.INPUT_TEXT_MESSAGE:
        draft.payloads[action.payload.idx].contents.text = action.payload.text;
        return;
      case actionTypes.INPUT_BUTTONS_NUMBER:
        const arrayNumber = action.payload.number - state.payloads[action.payload.idx].contents.buttonsActions.length;
        const actionsArray = arrayNumber >= 0 ? new Array(arrayNumber).fill({type: 'message', label: '', text: '', displayText: '', data: ''}) : [];
        const mergedActionsArray = arrayNumber >= 0 ? [...state.payloads[action.payload.idx].contents.buttonsActions, ...actionsArray] : state.payloads[action.payload.idx].contents.buttonsActions.slice(0, action.payload.number);
        draft.payloads[action.payload.idx].contents.buttonsNumber = action.payload.number;
        draft.payloads[action.payload.idx].contents.buttonsActions = mergedActionsArray;
        return;
      case actionTypes.INPUT_BUTTONS_ALTTEXT:
        draft.payloads[action.payload.idx].contents.buttonsAltText = action.payload.altText;
        return;
      case actionTypes.INPUT_BUTTONS_TYPE:
        draft.payloads[action.payload.payloadIdx].contents.buttonsActions[action.payload.idx].type = action.payload.type;
        return;
      case actionTypes.INPUT_BUTTONS_DATA:
        draft.payloads[action.payload.payloadIdx].contents.buttonsActions[action.payload.idx].data = action.payload.data;
        return;
      case actionTypes.INPUT_BUTTONS_LABEL:
        draft.payloads[action.payload.payloadIdx].contents.buttonsActions[action.payload.idx].label = action.payload.label;
        return;
      case actionTypes.INPUT_BUTTONS_TEXT:
        draft.payloads[action.payload.payloadIdx].contents.buttonsActions[action.payload.idx].text = action.payload.text;
        return;
      case actionTypes.INPUT_BUTTONS_DISPLAYTEXT:
        draft.payloads[action.payload.payloadIdx].contents.buttonsActions[action.payload.idx].displayText = action.payload.displayText;
        return;
      case actionTypes.INPUT_CONFIRM_ALTTEXT:
        draft.payloads[action.payload.idx].contents.confirmAltText = action.payload.altText;
        return;
      case actionTypes.INPUT_CONFIRM_TYPE:
        draft.payloads[action.payload.payloadIdx].contents.confirmActions[action.payload.idx].type = action.payload.type;
        return;
      case actionTypes.INPUT_CONFIRM_DATA:
        draft.payloads[action.payload.payloadIdx].contents.confirmActions[action.payload.idx].data = action.payload.data;
        return;
      case actionTypes.INPUT_CONFIRM_LABEL:
        draft.payloads[action.payload.payloadIdx].contents.confirmActions[action.payload.idx].label = action.payload.label;
        return;
      case actionTypes.INPUT_CONFIRM_TEXT:
        draft.payloads[action.payload.payloadIdx].contents.confirmActions[action.payload.idx].text = action.payload.text;
        return;
      case actionTypes.INPUT_CONFIRM_DISPLAYTEXT:
        draft.payloads[action.payload.payloadIdx].contents.confirmActions[action.payload.idx].displayText = action.payload.displayText;
        return;
      case actionTypes.INPUT_IMAGE_ORIGINAL:
        draft.payloads[action.payload.idx].contents.originalContentUrl = action.payload.url;
        return;
      case actionTypes.INPUT_IMAGE_PREVIEW:
        draft.payloads[action.payload.idx].contents.previewImageUrl = action.payload.url;
        return;
    }
  });

export default payloadReducer;
