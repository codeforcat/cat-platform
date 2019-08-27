import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PayloadMessage from '../PayloadMessage/PayloadMessage.jsx';
import FormItem from '../FormItem/FormItem.jsx';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  label: {
    paddingTop: '1em',
  },
  radio: {
    marginBottom: '1.5em',
  }
}));

export default function Payloads(props) {
  const classes = useStyles();

  return (
    <FormItem
      titleText="応答メッセージ"
      titleAlign="flex-start"
      titleClass={classes.label}
    >
      {phrase_list.map((item, index)=>
        <PayloadMessage/>
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.actions.addPhraseText()}
      >
        add
      </Button>
    </FormItem>
  );
}
