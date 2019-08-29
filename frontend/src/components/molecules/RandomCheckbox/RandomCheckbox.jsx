import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormItem from '../FormItem/FormItem.jsx';

export default function RandomCheckbox(props) {
  return (
    <FormItem
      label="random"
      titleText="ランダム表示"
      titleAlign="center"
    >
      <FormControlLabel
        control={<Checkbox
          checked={props.random}
          onChange={(e) => props.actions.inputRandomState(e.target.checked)}
          value={props.random}
        />}
        label="応答メッセージをランダムに表示する"
      />
    </FormItem>
  );
}
