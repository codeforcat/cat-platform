export const INPUT_PAYLOAD_STATE = 'INPUT_PAYLOAD_STATE';
export const ADD_PAYLOAD_STATE = 'ADD_PAYLOAD_STATE';
export const DELETE_PAYLOAD_STATE = 'DELETE_PAYLOAD_STATE';
export const INPUT_TEXT_MESSAGE = 'INPUT_TEXT_MESSAGE';
export const INPUT_BUTTONS_NUMBER = 'INPUT_BUTTONS_NUMBER';
export const INPUT_BUTTONS_ALTTEXT = 'INPUT_BUTTONS_ALTTEXT';
export const INPUT_BUTTONS_TYPE = 'INPUT_BUTTONS_TYPE';
export const INPUT_BUTTONS_DATA = 'INPUT_BUTTONS_DATA';
export const INPUT_BUTTONS_LABEL = 'INPUT_BUTTONS_LABEL';
export const INPUT_BUTTONS_TEXT = 'INPUT_BUTTONS_TEXT';
export const INPUT_CONFIRM_ALTTEXT = 'INPUT_CONFIRM_ALTTEXT';
export const INPUT_CONFIRM_TYPE = 'INPUT_CONFIRM_TYPE';
export const INPUT_CONFIRM_DATA = 'INPUT_CONFIRM_DATA';
export const INPUT_CONFIRM_LABEL = 'INPUT_CONFIRM_LABEL';
export const INPUT_CONFIRM_TEXT = 'INPUT_CONFIRM_TEXT';
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

export function deletePayloadState(idx, payload_temp_idx) {
  return {
    type: DELETE_PAYLOAD_STATE,
    payload:{
      idx: parseInt(idx),
      payload_temp_idx: parseInt(payload_temp_idx)
    }
  }
}

export function inputTextMessage(text) {
  return {
    type: INPUT_TEXT_MESSAGE,
    payload:{
      text: text
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

export function inputConfirmAltText(altText) {
  return {
    type: INPUT_CONFIRM_ALTTEXT,
    payload:{
      altText: altText
    }
  }
}

export function inputConfirmType(type, idx) {
  return {
    type: INPUT_CONFIRM_TYPE,
    payload:{
      type: type,
      idx: parseInt(idx)
    }
  }
}

export function inputConfirmData(data, idx) {
  return {
    type: INPUT_CONFIRM_DATA,
    payload:{
      data: data,
      idx: parseInt(idx)
    }
  }
}

export function inputConfirmLabel(label, idx) {
  return {
    type: INPUT_CONFIRM_LABEL,
    payload:{
      label: label,
      idx: parseInt(idx)
    }
  }
}

export function inputConfirmText(text, idx) {
  return {
    type: INPUT_CONFIRM_TEXT,
    payload:{
      text: text,
      idx: parseInt(idx)
    }
  }
}

export function inputImageOriginal(url) {
  return {
    type: INPUT_IMAGE_ORIGINAL,
    payload:{
      url: url
    }
  }
}

export function inputImagePreview(url) {
  return {
    type: INPUT_IMAGE_PREVIEW,
    payload:{
      url: url
    }
  }
}

export function setPayloadError() {
  return {
    type: SET_PAYLOAD_ERROR
  }
}
