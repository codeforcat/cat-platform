import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import AdditionalLabelText from '../AdditionalLabelText/AdditionalLabelText.jsx';

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: '1em',
  }
}));

export default function AdditionalConfirmField(props) {
  const classes = useStyles();

  return (
    <div className={props.className}>
      <Grid
        container
        direction="column"
        spacing={3}
      >
        <Grid item xs={12}>
          <InputLabel htmlFor="buttons-title" required>メッセージのタイトル</InputLabel>
          <Input
            id="buttons-title"
            value={props.confirm.altText}
            onChange={(e) => props.actions.inputConfirmAltText(e.target.value)}
            required
            fullWidth
            error={props.confirm.altText === '' && !props.isValid}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel className={classes.label}>２択ボタンのテキスト</InputLabel>
          {props.confirm.template.actions.map((item, index)=>
            <AdditionalLabelText
              key={index}
              item={item}
              idx={index}
              isValid={props.isValid}
              inputType={props.actions.inputConfirmType}
              inputData={props.actions.inputConfirmData}
              inputLabel={props.actions.inputConfirmLabel}
              inputText={props.actions.inputConfirmText}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
