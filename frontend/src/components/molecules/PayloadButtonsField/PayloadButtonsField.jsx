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
            value={props.buttons.altText}
            onChange={(e) => props.actions.inputButtonsAltText(e.target.value)}
            required
            fullWidth
            error={props.buttons.altText === '' && !props.isValid}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="buttons-number" className={classes.label}>選択肢の数</InputLabel>
          <Select
            value={props.buttons_number}
            onChange={(e) => props.actions.inputButtonsNumber(e.target.value)}
            input={<Input id="buttons-number"/>}
            autoWidth
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
          </Select>
          {props.buttons.template.actions.map((item, index)=>
            <PayloadLabelText
              key={index}
              item={item}
              idx={index}
              isValid={props.isValid}
              inputType={props.actions.inputButtonsType}
              inputData={props.actions.inputButtonsData}
              inputLabel={props.actions.inputButtonsLabel}
              inputText={props.actions.inputButtonsText}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
