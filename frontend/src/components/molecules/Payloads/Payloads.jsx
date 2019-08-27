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
      {props.payloads.map((item, index)=>
        <PayloadMessage
          key={index}
          idx={index}
          length={props.payloads.length}
          state={item.contents.state}
          payloadTempId={item.payloadTempId}
          actions={props.actions}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.actions.addPayloadState()}
      >
        add
      </Button>
    </FormItem>
  );
}
