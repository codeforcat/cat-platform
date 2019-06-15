import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import AdditionalRadio from '../AdditionalRadio/AdditionalRadio.jsx';
import AdditionalButtonsField from '../AdditionalButtonsField/AdditionalButtonsField.jsx';
import AdditionalConfirmField from '../AdditionalConfirmField/AdditionalConfirmField.jsx';
import AdditionalImageField from '../AdditionalImageField/AdditionalImageField.jsx';

const useStyles = makeStyles(theme => ({
  label: {
    paddingTop: '1em',
  },
  radio: {
    marginBottom: '1.5em',
  }
}));

export default function AdditionalMessage(props) {
  const classes = useStyles();

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
          <InputLabel className={classes.label}>追加メッセージ</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <AdditionalRadio className={classes.radio}/>
          <AdditionalButtonsField/>
          <AdditionalConfirmField/>
          <AdditionalImageField/>
        </Grid>
      </Grid>
    </div>
  );
}
