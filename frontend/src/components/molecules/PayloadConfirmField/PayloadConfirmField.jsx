import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PayloadLabelText from '../PayloadLabelText/PayloadLabelText.jsx';

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: '1em',
  }
}));

export default function PayloadConfirmField(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={3}
    >
      <Grid item xs={12}>
        <InputLabel htmlFor="`buttons-title${props.idx}`" required>メッセージのタイトル</InputLabel>
        <Input
          id="`buttons-title${props.idx}`"
          value={props.altText}
          onChange={(e) => props.actions.inputConfirmAltText(e.target.value, props.idx)}
          required
          fullWidth
          error={props.altText === '' && !props.isValid}
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel className={classes.label}>２択ボタンのテキスト</InputLabel>
        {props.confirmActions.map((item, index)=>
          <PayloadLabelText
            key={index}
            item={item}
            idx={index}
            payloadIdx={props.idx}
            isValid={props.isValid}
            inputType={props.actions.inputConfirmType}
            inputData={props.actions.inputConfirmData}
            inputLabel={props.actions.inputConfirmLabel}
            inputText={props.actions.inputConfirmText}
            inputDisplayText={props.actions.inputConfirmDisplayText}
          />
        )}
      </Grid>
    </Grid>
  );
}
