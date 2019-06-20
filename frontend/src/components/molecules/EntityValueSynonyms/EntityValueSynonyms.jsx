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
  const value_list = [1,2];

  return (
    <FormItem
      titleText="Value"
      titleAlign="flex-start"
    >
      {value_list.map((item, index)=>
        <EntityValueSynonymField key={index} index={index} delete/>
      )}
      <Button variant="contained" color="primary" className={classes.button}>add</Button>
    </FormItem>
  );
}
