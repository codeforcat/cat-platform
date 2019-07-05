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
    <FormItem
      label="question-id"
      titleText="Question ID"
      titleAlign="center"
    >
      <Input
        id="question-id"
        aria-describedby="question-id-helper-text"
        value={props.params ? props.params : props.id || ''}
        onChange={(e) => props.actions.inputQuestionId(e.target.value)}
        onKeyDown={(e) => {if(e.key === 'Enter' && e.target.value !== '') props.actions.setDialogueState(e.target.value)}}
        disabled
      />
    </FormItem>
  );
}
