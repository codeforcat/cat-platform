import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function PhraseTextField(props) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={10}>
        <TextField
          value={props.text}
          onChange={(e) => props.actions.inputPhraseText(e.target.value, props.idx)}
          fullWidth
          multiline
          rows={3}
          required={props.first}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() => props.actions.deletePhraseText(props.idx, props.phrase_temp_id)}
        >
          delete
        </Button>
      </Grid>
    </Grid>
  );
}
