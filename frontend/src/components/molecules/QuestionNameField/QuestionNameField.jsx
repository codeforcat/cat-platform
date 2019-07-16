import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormItem from '../FormItem/FormItem.jsx';

export default function QuestionNameField(props) {
  return (
    <FormItem
      label="question-name"
      titleText="Questionの名前"
      titleAlign="center"
      isRequired={true}
    >
      <Input
        id="question-name"
        value={props.name}
        onChange={(e) => props.actions.inputQuestionName(e.target.value)}
        required
        fullWidth
        error={!props.isValid}
        aria-describedby="question-name-error"
      />
      {(!props.isValid && props.isShowError) && <FormHelperText error id="question-name-error">{props.errorMsg[props.errorCode]}</FormHelperText>}
    </FormItem>
  );
}
