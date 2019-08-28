import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export default function PayloadTextField(props) {
  return (
    <>
      <InputLabel htmlFor="`text${props.idx}`">テキスト</InputLabel>
      <TextField
        id="`text${props.idx}`"
        value={props.text}
        onChange={(e) => props.actions.inputTextMessage(e.target.value, props.idx)}
        fullWidth
        multiline
        rows={3}
        error={props.text === '' && !props.isValid}
        aria-describedby="`text-error${props.idx}`"
      />
    </>
  );
}
