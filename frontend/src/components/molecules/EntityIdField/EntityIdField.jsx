import React, { useEffect } from 'react';
import Input from '@material-ui/core/Input';
import FormItem from '../FormItem/FormItem.jsx';

export default function EntityIdField(props) {
  useEffect(() => {
    if(props.params) {
      props.actions.inputEntityId(props.params);
      props.actions.setEntityState(props.params);
    }
    return () => props.actions.clearEntity();
  },[props.params]);

  return (
    <FormItem
      label="entity-id"
      titleText="Entity ID"
      titleAlign="center"
    >
      <Input
        id="entity-id"
        aria-describedby="entity-id-helper-text"
        value={props.params ? props.params : props.id || ''}
        onChange={(e) => props.actions.inputEntityId(e.target.value)}
        onKeyDown={(e) => {if(e.key === 'Enter' && e.target.value !== '') props.actions.setEntityState(e.target.value)}}
        disabled
      />
    </FormItem>
  );
}
