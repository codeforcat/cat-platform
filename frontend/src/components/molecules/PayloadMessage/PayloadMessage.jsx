import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PayloadRadio from '../PayloadRadio/PayloadRadio.jsx';
import PayloadTextField from '../PayloadTextField/PayloadTextField.jsx';
import PayloadButtonsField from '../PayloadButtonsField/PayloadButtonsField.jsx';
import PayloadConfirmField from '../PayloadConfirmField/PayloadConfirmField.jsx';
import PayloadImageField from '../PayloadImageField/PayloadImageField.jsx';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  label: {
    paddingTop: '1em',
  },
  radio: {
    marginBottom: '1.5em',
  }
}));

export default function PayloadMessage(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={props.length > 1 ? 10 : 12}>
        <PayloadRadio
          className={classes.radio}
          idx={props.idx}
          state={props.state}
          actions={props.actions}
        />
        {props.state === 'text' && <PayloadTextField/>}
        {props.state === 'buttons' && <PayloadButtonsField
          buttons_number={props.buttons_number}
          buttons={props.buttons}
          isValid={props.isValid}
          actions={props.actions}
        />}
        {props.state === 'confirm' && <PayloadConfirmField
          confirm={props.confirm}
          isValid={props.isValid}
          actions={props.actions}
        />}
        {props.state === 'image' && <PayloadImageField
          image={props.image}
          isValid={props.isValid}
          actions={props.actions}
        />}
        {(!props.isValid && props.isShowError) && <FormHelperText error>{props.errorMsg[props.errorCode]}</FormHelperText>}
      </Grid>
      {props.length > 1 && <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() => props.actions.deletePayloadState(props.idx, props.payloadTempId)}
        >
          delete
        </Button>
      </Grid>}
    </Grid>
  );
}
