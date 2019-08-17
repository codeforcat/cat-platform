import React, { useEffect } from 'react';
import Input from '@material-ui/core/Input';
import FormItem from '../FormItem/FormItem.jsx';

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
