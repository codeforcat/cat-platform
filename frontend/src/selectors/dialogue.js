export function getDialogueState(state, payload) {
  // let answerWithKeyword = [];
  // let answers = [];
  // const answerObj = payload.phrases;
  // Object.keys(answerObj).forEach((value, index) => {
  //   answerWithKeyword[index] = Object.assign({}, answerObj[index], {phrase_text: value.phrase_text});
  //   answers.push(answerWithKeyword[index]);
  // });
  return Object.assign({},state,{
    temp:{
      question_name: payload.question_name,
      parent_answer_id: payload.parent_answer_id,
      phrases: payload.phrases,
      answer: payload.answer
    }
  });
}

export function isValidState(state) {
  return [
    state.dialogue.isValid
  ].every(item=>item);
}
