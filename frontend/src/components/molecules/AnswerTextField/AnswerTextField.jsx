import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export default function AnswerTextField(props) {
  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}>
        <Grid item xs={12} sm={3}>
          <InputLabel htmlFor="answer-text" required>Answer</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField id="answer-text" fullWidth multiline rows={3} required/>
        </Grid>
      </Grid>
    </div>
  );
}
