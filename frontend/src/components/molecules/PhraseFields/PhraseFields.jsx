import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import PhraseTextField from '../PhraseTextField/PhraseTextField.jsx';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '1em',
  }
}));

export default function PhraseFields(props) {
  const classes = useStyles();
  const phrase_list = props.phrases;

  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} sm={3}>
          <InputLabel required>Questionのフレーズ<br/>（言い替え）</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          {phrase_list.map((item, index)=>
            <PhraseTextField
              key={index}
              first={index === 0}
              text={item.phrase_text}
              idx={index}
              temp_id={item.phrase_temp_id}
              actions={props.actions}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.actions.addPhraseText()}
          >
            add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
