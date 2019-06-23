import React from 'react';
import Input from '@material-ui/core/Input';
import FormItem from '../FormItem/FormItem.jsx';

export default function EntityNameField(props) {
  return (
    <FormItem
      label="entity-name"
      titleText="Entityの名前"
      titleAlign="center"
      isRequired={true}
    >
      <Input
        id="entity-name"
        value={props.name}
        onChange={(e) => props.actions.inputEntityName(e.target.value)}
        required
        fullWidth
      />
    </FormItem>
  );
}
