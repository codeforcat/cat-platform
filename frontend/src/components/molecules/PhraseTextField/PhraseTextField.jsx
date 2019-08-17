import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
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
      <Grid item xs={props.length > 1 ? 10 : 12}>
        <TextField
          value={props.text}
          onChange={(e) => props.actions.inputPhraseText(e.target.value, props.idx)}
          fullWidth
          multiline
          rows={3}
          required={props.first}
          error={!props.isValid}
          aria-describedby="`phrase-text-error${props.idx}`"
        />
        {(!props.isValid && props.isShowError) && <FormHelperText error id="`phrase-text-error${props.idx}`">{props.errorMsg[props.errorCode]}</FormHelperText>}
      </Grid>
      {props.length > 1 && <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() => props.actions.deletePhraseText(props.idx, props.phrase_temp_id)}
        >
          delete
        </Button>
      </Grid>}
    </Grid>
  );
}
