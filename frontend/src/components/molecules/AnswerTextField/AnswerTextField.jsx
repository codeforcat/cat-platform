import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormItem from '../FormItem/FormItem.jsx';

export default function AnswerTextField(props) {
  return (
    <FormItem
      label="answer-text"
      titleText="Answer"
      titleAlign="flex-start"
      isRequired={true}
    >
      <TextField
        id="answer-text"
        value={props.answer_text}
        onChange={(e) => props.actions.inputAnswerText(e.target.value, props.idx)}
        fullWidth
        multiline
        rows={3}
        required
      />
    </FormItem>
  );
}
