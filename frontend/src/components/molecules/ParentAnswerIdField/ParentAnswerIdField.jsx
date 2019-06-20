import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormItem from '../FormItem/FormItem.jsx';

export default function ParentAnswerIdField(props) {
  function handleChange(event) {
    props.actions.inputParentAnswerId(event.target.value);
  }

  return (
    <FormItem
      label="parent-answer-id"
      titleText="親のAnswer ID"
      titleAlign="center"
    >
      <Select
        value={props.parent_answer_id}
        onChange={handleChange}
        input={<Input id="parent-answer-id"/>}
        autoWidth>
        <MenuItem value="-1">なし</MenuItem>
        {props.exists_answers.map((item, index) =>
          <MenuItem key={index} value={item.answer_id}>{item.answer_text}</MenuItem>
        )}
      </Select>
    </FormItem>
  );
}
