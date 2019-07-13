import React from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormItem from '../FormItem/FormItem.jsx';

export default function ParentAnswerIdField(props) {
  return (
    <FormItem
      label="parent-answer-id"
      titleText="親のAnswer ID"
      titleAlign="center"
    >
      <Select
        value={props.parent_answer_id}
        onChange={(e) => props.actions.inputParentAnswerId(e.target.value)}
        input={<Input id="parent-answer-id"/>}
        autoWidth
      >
        <MenuItem value="-1">なし</MenuItem>
        {props.exists_answers.map((item, index) =>
          <MenuItem key={index} value={item.answer_id}>{item.answer_text}</MenuItem>
        )}
      </Select>
    </FormItem>
  );
}
