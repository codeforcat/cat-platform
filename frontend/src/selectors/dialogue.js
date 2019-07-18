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
    dialogueObj[index].answers.map((item, i) => {
      answerTexts.push(item.answer_text)
    });
    rows.push(createData(dialogueObj[index].question_id, dialogueObj[index].question_name, phraseTexts.join(', '), answerTexts.join(', ')));
  });
  return rows;
}

function containEmpty(json_data){
  if(json_data.length === 0){
    return true;
  }

  if(typeof json_data !== 'object'){
    return false;
  }

  let flag = false;
  let flagMessage = 1;
  for(let key in json_data){
    if(key === 'type' && json_data[key] === 'message'){
      flagMessage = 1;
    }
    else if(key === 'type' && json_data[key] === 'postback') {
      flagMessage = 2;
    }

    if(containEmpty(json_data[key])){
      if(flagMessage === 1 && (key === 'displayText' || key === 'data')) {
        continue;
      }
      else if(flagMessage === 2 && key === 'text') {
        continue;
      }
      flag = true;
    }
  }
  return flag;
}

export function isValidAdditionalState(state, data){
  return !containEmpty(data);
}

export function getDialogueState(state, payload) {
  return Object.assign({},state,{
    temp:{
      question_name: payload.question_name,
      parent_answer_id: payload.parent_answer_id,
      phrases: payload.phrases,
      entities: payload.entities,
      answers: payload.answers,
      additional_state: payload.additional_state,
      additional_message: payload.additional_message
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
  let answerItem = [];
  let answers = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((index) => {
    answerItem[index] = Object.assign({}, answerObj[index], {answer_text: answerObj[index].answer_text, isValid: true, errorCode: 'answer_empty_error'});
    answers.push(answerItem[index]);
  });
  return Object.assign({}, state, {
    question_name: payload.question_name,
    parent_answer_id: payload.parent_answer_id,
    phrases: phrases,
    entities: payload.entities,
    answers: answers,
    additional_state: payload.additional_state,
    buttons: payload.additional_state === 'buttons' ? payload.additional_message : {
      type: 'template',
      altText: '',
      template: {
        type: 'buttons',
        text: '',
        actions: [
          {
            type: 'message',
            label: '',
            text: '',
            displayText: '',
            data: ''
          }
        ]
      }
    },
    confirm: payload.additional_state === 'confirm' ? payload.additional_message : {
      type: 'template',
      altText: '',
      template: {
        type: 'confirm',
        text: '',
        actions: [
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
        ]
      }
    },
    image: payload.additional_state === 'image' ? payload.additional_message : {
      type: 'image',
      originalContentUrl: '',
      previewImageUrl: ''
    }
  });
}

export function isValidState(state) {
  return [
    state.dialogue.isValid,
    state.dialogue.phrases.filter(item=>item.isValid === true).length === state.dialogue.phrases.length,
    state.dialogue.answers.filter(item=>item.isValid === true).length === state.dialogue.answers.length
  ].every(item=>item);
}
