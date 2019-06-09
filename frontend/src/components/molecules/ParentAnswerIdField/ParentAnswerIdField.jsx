import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function ParentAnswerIdField(props) {
  const [values, setValues] = React.useState({
    parent_answer: ''
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      parent_answer: event.target.value,
    }));
  }

  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} sm={3}>
          <InputLabel htmlFor="parent-answer-id">親のAnswer ID</InputLabel>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            value={values.parent_answer}
            onChange={handleChange}
            input={<Input id="parent-answer-id"/>}
            autoWidth>
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}
