import React, { useEffect } from 'react';

export default function QuestionIdField(props) {
  useEffect(() => {
    if(props.params) {
      props.actions.inputQuestionId(props.params);
      props.actions.setDialogueState(props.params);
    }
    return () => props.actions.clearDialogue();
  },[props.params]);

  return (
    <>
    </>
  );
}
