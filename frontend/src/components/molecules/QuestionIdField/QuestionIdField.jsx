import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function QuestionIdField(props) {
  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} sm={3}>
          <InputLabel htmlFor="question-id">Question ID</InputLabel>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input id="question-id" aria-describedby="question-id-helper-text"/>
          <FormHelperText id="question-id-helper-text">※新規追加時は空欄</FormHelperText>
        </Grid>
      </Grid>
    </div>
  );
}
