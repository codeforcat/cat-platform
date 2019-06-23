import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormItem from '../FormItem/FormItem.jsx';

export default function EntityIdField(props) {
  return (
    <FormItem
      label="entity-id"
      titleText="Entity ID"
      titleAlign="center"
    >
      <Input
        id="entity-id"
        aria-describedby="entity-id-helper-text"
        value={props.id}
        onChange={(e) => props.actions.inputEntityId(e.target.value)}
      />
      <FormHelperText id="entity-id-helper-text">※新規追加時は空欄</FormHelperText>
    </FormItem>
  );
}
