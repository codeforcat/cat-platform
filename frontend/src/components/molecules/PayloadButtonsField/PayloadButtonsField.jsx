import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PayloadLabelText from '../PayloadLabelText/PayloadLabelText.jsx';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: '1em',
  },
  button: {
    marginTop: '1em',
  }
}));

export default function PayloadButtonsField(props) {
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
          onChange={(e) => props.actions.inputButtonsAltText(e.target.value, props.idx)}
          required
          fullWidth
          error={props.altText === '' && !props.isValid}
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel htmlFor="`buttons-number${props.idx}`" className={classes.label}>選択肢の数</InputLabel>
        <Select
          value={props.number}
          onChange={(e) => props.actions.inputButtonsNumber(e.target.value, props.idx)}
          input={<Input id="`buttons-number${props.idx}`"/>}
          autoWidth
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
        {props.buttonsActions.map((item, index)=>
          <PayloadLabelText
            key={index}
            item={item}
            idx={index}
            payloadIdx={props.idx}
            isValid={props.isValid}
            inputType={props.actions.inputButtonsType}
            inputData={props.actions.inputButtonsData}
            inputLabel={props.actions.inputButtonsLabel}
            inputText={props.actions.inputButtonsText}
            inputDisplayText={props.actions.inputButtonsDisplayText}
          />
        )}
      </Grid>
    </Grid>
  );
}
