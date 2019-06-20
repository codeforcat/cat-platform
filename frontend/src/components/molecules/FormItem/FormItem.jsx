import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  field: {
    margin: '1.5em 0',
  }
}));

export default function FormItem(props) {
  const classes = useStyles();

  function createMarkup() {
    return {__html: props.titleText};
  }

  return (
    <div className={classes.field}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems={props.titleAlign}
        spacing={3}
      >
        <Grid item xs={12} sm={3}>
          <InputLabel className={props.titleClass} htmlFor={props.label} required={props.isRequired}><span dangerouslySetInnerHTML={createMarkup()}/></InputLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}
