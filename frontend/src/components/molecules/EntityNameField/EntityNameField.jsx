import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
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
        error={!props.isValid || props.apiErrorMsg !== ''}
        aria-describedby="entity-name-error"
      />
      {(!props.isValid && props.isShowError) && <FormHelperText error id="entity-name-error">{props.errorMsg[props.errorCode]}</FormHelperText>}
      {props.apiErrorMsg !== '' && <FormHelperText error id="entity-name-error">{props.apiErrorMsg}</FormHelperText>}
    </FormItem>
  );
}
