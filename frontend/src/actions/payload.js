export const INPUT_PAYLOAD_STATE = 'INPUT_PAYLOAD_STATE';
export const ADD_PAYLOAD_STATE = 'ADD_PAYLOAD_STATE';
export const DELETE_PAYLOAD_STATE = 'DELETE_PAYLOAD_STATE';
export const SORT_PAYLOAD_STATE = 'SORT_PAYLOAD_STATE';
export const INPUT_TEXT_MESSAGE = 'INPUT_TEXT_MESSAGE';
export const INPUT_BUTTONS_NUMBER = 'INPUT_BUTTONS_NUMBER';
export const INPUT_BUTTONS_ALTTEXT = 'INPUT_BUTTONS_ALTTEXT';
export const INPUT_BUTTONS_TYPE = 'INPUT_BUTTONS_TYPE';
export const INPUT_BUTTONS_DATA = 'INPUT_BUTTONS_DATA';
export const INPUT_BUTTONS_LABEL = 'INPUT_BUTTONS_LABEL';
export const INPUT_BUTTONS_TEXT = 'INPUT_BUTTONS_TEXT';
export const INPUT_BUTTONS_DISPLAYTEXT = 'INPUT_BUTTONS_DISPLAYTEXT';
export const INPUT_CONFIRM_ALTTEXT = 'INPUT_CONFIRM_ALTTEXT';
export const INPUT_CONFIRM_TYPE = 'INPUT_CONFIRM_TYPE';
export const INPUT_CONFIRM_DATA = 'INPUT_CONFIRM_DATA';
export const INPUT_CONFIRM_LABEL = 'INPUT_CONFIRM_LABEL';
export const INPUT_CONFIRM_TEXT = 'INPUT_CONFIRM_TEXT';
export const INPUT_CONFIRM_DISPLAYTEXT = 'INPUT_CONFIRM_DISPLAYTEXT';
export const INPUT_IMAGE_ORIGINAL = 'INPUT_IMAGE_ORIGINAL';
export const INPUT_IMAGE_PREVIEW = 'INPUT_IMAGE_PREVIEW';
export const SET_PAYLOAD_ERROR = 'SET_PAYLOAD_ERROR';

export function inputPayloadState(state, idx) {
  return {
    type: INPUT_PAYLOAD_STATE,
    payload:{
      state: state,
      idx: parseInt(idx)
    }
  }
}

export function addPayloadState() {
  return {
    type: ADD_PAYLOAD_STATE
  }
}

export function deletePayloadState(payloadTempIdx) {
  return {
    type: DELETE_PAYLOAD_STATE,
    payload:{
      payloadTempIdx: parseInt(payloadTempIdx)
    }
  }
}

export function sortPayloadState(payloadArr) {
  return {
    type: SORT_PAYLOAD_STATE,
    payload:{
      array: payloadArr
    }
  }
}

export function inputTextMessage(text, idx) {
  return {
    type: INPUT_TEXT_MESSAGE,
    payload:{
      text: text,
      idx: parseInt(idx)
    }
  }
}

export function inputButtonsNumber(number, idx) {
  return {
    type: INPUT_BUTTONS_NUMBER,
    payload:{
      number: parseInt(number),
      idx: parseInt(idx)
    }
  }
}

export function inputButtonsAltText(altText, idx) {
  return {
    type: INPUT_BUTTONS_ALTTEXT,
    payload:{
      altText: altText,
      idx: parseInt(idx)
    }
  }
}

export function inputButtonsType(type, idx, payloadIdx) {
  return {
    type: INPUT_BUTTONS_TYPE,
    payload:{
      type: type,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputButtonsData(data, idx, payloadIdx) {
  return {
    type: INPUT_BUTTONS_DATA,
    payload:{
      data: data,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputButtonsLabel(label, idx, payloadIdx) {
  return {
    type: INPUT_BUTTONS_LABEL,
    payload:{
      label: label,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputButtonsText(text, idx, payloadIdx) {
  return {
    type: INPUT_BUTTONS_TEXT,
    payload:{
      text: text,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputButtonsDisplayText(displayText, idx, payloadIdx) {
  return {
    type: INPUT_BUTTONS_DISPLAYTEXT,
    payload:{
      displayText: displayText,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputConfirmAltText(altText, idx) {
  return {
    type: INPUT_CONFIRM_ALTTEXT,
    payload:{
      altText: altText,
      idx: parseInt(idx)
    }
  }
}

export function inputConfirmType(type, idx, payloadIdx) {
  return {
    type: INPUT_CONFIRM_TYPE,
    payload:{
      type: type,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputConfirmData(data, idx, payloadIdx) {
  return {
    type: INPUT_CONFIRM_DATA,
    payload:{
      data: data,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputConfirmLabel(label, idx, payloadIdx) {
  return {
    type: INPUT_CONFIRM_LABEL,
    payload:{
      label: label,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputConfirmText(text, idx, payloadIdx) {
  return {
    type: INPUT_CONFIRM_TEXT,
    payload:{
      text: text,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputConfirmDisplayText(displayText, idx, payloadIdx) {
  return {
    type: INPUT_CONFIRM_DISPLAYTEXT,
    payload:{
      displayText: displayText,
      idx: parseInt(idx),
      payloadIdx: parseInt(payloadIdx)
    }
  }
}

export function inputImageOriginal(url, idx) {
  return {
    type: INPUT_IMAGE_ORIGINAL,
    payload:{
      url: url,
      idx: parseInt(idx)
    }
  }
}

export function inputImagePreview(url, idx) {
  return {
    type: INPUT_IMAGE_PREVIEW,
    payload:{
      url: url,
      idx: parseInt(idx)
    }
  }
}

export function setPayloadError() {
  return {
    type: SET_PAYLOAD_ERROR
  }
}
