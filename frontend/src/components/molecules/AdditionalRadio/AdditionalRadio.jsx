import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function AdditionalRadio(props) {
  function handleChange(event) {
    props.actions.inputAdditionalState(event.target.value, props.idx);
  }

  return (
    <div className={props.className}>
      <RadioGroup
        name="addition"
        value={props.state}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="none" control={<Radio color="primary" />} label="なし"/>
        <FormControlLabel value="buttons" control={<Radio color="primary" />} label="選択肢ボタン"/>
        <FormControlLabel value="confirm" control={<Radio color="primary" />} label="２択ボタン"/>
        <FormControlLabel value="image" control={<Radio color="primary" />} label="画像"/>
      </RadioGroup>
    </div>
  );
}
