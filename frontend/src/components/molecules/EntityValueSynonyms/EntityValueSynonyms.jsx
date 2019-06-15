import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import EntityValueSynonymField from '../EntityValueSynonymField/EntityValueSynonymField.jsx';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '1em',
  }
}));

export default function EntityValueSynonyms(props) {
  const classes = useStyles();
  const value_list = [1,2];

  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} sm={3}>
          <InputLabel>Value</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          {value_list.map((item, index)=>
            <EntityValueSynonymField key={index} index={index} delete/>
          )}
          <Button variant="contained" color="primary" className={classes.button}>add</Button>
        </Grid>
      </Grid>
    </div>
  );
}
