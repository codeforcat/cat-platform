import React from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormItem from '../FormItem/FormItem.jsx';

export default function EntityIdFieldForDialogue(props) {
  return (
    <FormItem
      label="entity-id"
      titleText="Entity"
      titleAlign="center"
    >
      <Select
        value={props.entity_id || ''}
        onChange={(e) => props.actions.inputEntityId(e.target.value)}
        input={<Input id="entity-id"/>}
        autoWidth
      >
        <MenuItem value="-1">なし</MenuItem>
        {props.exists_entities.map((item, index) =>
          <MenuItem key={index} value={item.entity_id}>{item.entity_name}</MenuItem>
        )}
      </Select>
    </FormItem>
  );
}
