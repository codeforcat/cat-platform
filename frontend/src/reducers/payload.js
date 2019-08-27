import * as actionTypes from '../actions/payload';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  payloads: [
    {
      payload_temp_id: 0,
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
export default function (state = initialState,action) {
  switch (action.type){
    case actionTypes.INPUT_PAYLOAD_STATE:
      const makePayloadStateState = (state,index,inputData) => {
        const new_list = [
          ...state.payloads.slice(0, index),
          Object.assign({}, state.payloads[index], {state: inputData}),
          ...state.payloads.slice(index + 1)
        ];
        return Object.assign({},state,{
          payloads: new_list
        })
      };
      return makePayloadStateState(state,action.payload.idx,action.payload.state);
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
