import React from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormItem from '../FormItem/FormItem.jsx';

export default function EntityIdFieldForDialogue(props) {
  return (
    <FormItem
      label="entity-id"
      titleText="Entity"
      titleAlign="center"
    >
      <Select
        multiple
        value={props.entities}
        onChange={(e) => props.actions.inputEntity(e.target.value)}
        input={<Input id="entity-id" />}
        renderValue={selected => selected.map((item) => item.entity_name).join(', ')}
      >
        {props.exists_entities.map((item, index) =>
          <MenuItem key={index} value={{'entity_id': item.entity_id, 'entity_name': item.entity_name}}>
            <Checkbox
              checked={props.entities.findIndex((elm) => elm.entity_id === item.entity_id) > -1}
            />
            <ListItemText primary={item.entity_name} />
          </MenuItem>
        )}
      </Select>
    </FormItem>
  );
}
