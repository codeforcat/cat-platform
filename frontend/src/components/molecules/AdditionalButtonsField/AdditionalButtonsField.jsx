import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import AdditionalLabelText from '../AdditionalLabelText/AdditionalLabelText.jsx';
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

export default function AdditionalButtonsField(props) {
  const classes = useStyles();
  const array = new Array(props.buttons_number);
  const [buttonList, setButtonList] = useState(array.fill(0));

  function handleChange(event) {
    props.actions.inputButtonsNumber(event.target.value);
    const array = new Array(parseInt(event.target.value));
    setButtonList(array.fill(0));
  }

  return (
    <div className={props.className}>
      <Grid
        container
        direction="column"
        spacing={3}
      >
        <Grid item xs={12}>
          <InputLabel htmlFor="buttons-title" required>メッセージのタイトル</InputLabel>
          <Input id="buttons-title" required fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="buttons-number" className={classes.label}>選択肢の数</InputLabel>
          <Select
            value={props.buttons_number}
            onChange={handleChange}
            input={<Input id="buttons-number"/>}
            autoWidth
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
          </Select>
          {buttonList.map((item, index)=>
            <AdditionalLabelText
              key={index}
              index={index}
              actions={props.actions}
              delete
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
