import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
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
        error={!props.isValid}
        aria-describedby="`answer-text-error${props.idx}`"
      />
      {(!props.isValid && props.isShowError) && <FormHelperText error id="`answer-text-error${props.idx}`">{props.errorMsg[props.errorCode]}</FormHelperText>}
    </FormItem>
  );
}
