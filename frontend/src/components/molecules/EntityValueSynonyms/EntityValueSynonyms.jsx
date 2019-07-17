import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EntityValueSynonymField from '../EntityValueSynonymField/EntityValueSynonymField.jsx';
import Button from '@material-ui/core/Button';
import FormItem from '../FormItem/FormItem.jsx';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '1em',
  }
}));

export default function EntityValueSynonyms(props) {
  const classes = useStyles();

  return (
    <FormItem
      titleText="Value"
      titleAlign="flex-start"
    >
      {props.values.map((item, index)=>
        <EntityValueSynonymField
          key={index}
          idx={index}
          item={item}
          isValid={item.isValid}
          errorCode={item.errorCode}
          errorMsg={props.errorMsg}
          isShowError={props.isShowError}
          synonyms={props.synonyms.filter((value, i) => value.value_temp_id === item.value_temp_id)}
          actions={props.actions}
          delete
        />
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.actions.addValue()}
      >
        add
      </Button>
    </FormItem>
  );
}
