import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormItem from '../FormItem/FormItem.jsx';

export default function QuestionIdField(props) {
  return (
    <FormItem
      label="question-id"
      titleText="Question ID"
      titleAlign="center"
    >
      <Input
        id="question-id"
        aria-describedby="question-id-helper-text"
        value={props.id || ''}
        onChange={(e) => props.actions.inputQuestionId(e.target.value)}
        onKeyDown={(e) => {if(e.key === 'Enter' && e.target.value !== '') props.actions.setDialogueState(e.target.value)}}
      />
      <FormHelperText id="question-id-helper-text">※新規追加時は空欄</FormHelperText>
    </FormItem>
  );
}
