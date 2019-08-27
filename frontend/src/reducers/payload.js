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
// export default function (state = initialState,action) {
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
        draft.payloads.splice(draft.payloads.findIndex(elm => elm.payloadTempId === action.payload.payloadTempIdx), 1)
        return;
    }
  });

export default payloadReducer;
