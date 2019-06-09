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
      spacing={3}>
      <Grid item xs={10}>
        <TextField fullWidth multiline rows={3} required={props.first}/>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained">delete</Button>
      </Grid>
    </Grid>
  );
}
