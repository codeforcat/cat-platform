function createData(id, column1, column2, column3) {
  return { id, column1, column2, column3 };
}

export function setDialogueList(state, payload) {
  let rows = [];
  const dialogueObj = payload;
  Object.keys(dialogueObj).forEach((index) => {
    let phraseTexts = [];
    dialogueObj[index].phrases.map((item, i) => {
      phraseTexts.push(item.phrase_text)
    });
    let answerTexts = [];
    // dialogueObj[index].answers.map((item, i) => {
    //   answerTexts.push(item.answer_text)
    // });
    rows.push(createData(dialogueObj[index].question_id, dialogueObj[index].question_name, phraseTexts.join(', '), answerTexts.join(', ')));
  });
  return rows;
}

export function getDialogueState(state, payload, payloadArray) {
  return Object.assign({},state,{
    temp:{
      question_name: payload.question_name,
      phrases: payload.phrases,
      entities: payload.entities,
      payloads: payloadArray
    }
  });
}

export function setDialogueTemp(state, payload) {
  let phraseItem = [];
  let phrases = [];
  const phraseObj = payload.phrases;
  Object.keys(phraseObj).forEach((index) => {
    phraseItem[index] = Object.assign({}, phraseObj[index], {phrase_text: phraseObj[index].phrase_text, isValid: true, errorCode: 'phrase_empty_error'});
    phrases.push(phraseItem[index]);
  });
  return Object.assign({}, state, {
    question_name: payload.question_name,
    phrases: phrases,
    entities: payload.entities
  });
}

export function isValidState(state) {
  return [
    state.dialogue.isValid,
    state.dialogue.phrases.filter(item=>item.isValid === true).length === state.dialogue.phrases.length
  ].every(item=>item);
}

export function getPage(state, payload) {
  if(payload.current >= 2 && payload.count > 1) {
    return payload.current;
  }
  else if(payload.current >= 2 && payload.count <= 1) {
    return payload.current - 1;
  }
  else {
    return 1;
  }
}
