import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AdditionalRadio from '../AdditionalRadio/AdditionalRadio.jsx';
import AdditionalButtonsField from '../AdditionalButtonsField/AdditionalButtonsField.jsx';
import AdditionalConfirmField from '../AdditionalConfirmField/AdditionalConfirmField.jsx';
import AdditionalImageField from '../AdditionalImageField/AdditionalImageField.jsx';
import FormItem from '../FormItem/FormItem.jsx';
import FormHelperText from '@material-ui/core/FormHelperText';

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
    <FormItem
      titleText="追加メッセージ"
      titleAlign="flex-start"
      titleClass={classes.label}
    >
      <AdditionalRadio
        className={classes.radio}
        state={props.additional_state}
        actions={props.actions}
      />
      {props.additional_state === 'buttons' && <AdditionalButtonsField
        buttons_number={props.buttons_number}
        buttons={props.buttons}
        actions={props.actions}
      />}
      {props.additional_state === 'confirm' && <AdditionalConfirmField
        confirm={props.confirm}
        actions={props.actions}
      />}
      {props.additional_state === 'image' && <AdditionalImageField
        image={props.image}
        actions={props.actions}
      />}
      {(!props.isValid && props.isShowError) && <FormHelperText error>{props.errorMsg[props.errorCode]}</FormHelperText>}
    </FormItem>
  );
}
