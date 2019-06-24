import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  field: {
    margin: '1.5em 0',
  }
}));

export default function EntitySendButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.field}>
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <Grid item xs={4} sm={3}>
          {!props.isUpdateStateEnable && <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => props.actions.createEntity(props.entity_name, props.values_temp, props.synonyms_temp)}
          >
            create
          </Button>}
          {props.isUpdateStateEnable && <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => props.actions.updateEntity(props.entity_id, props.entity_name, props.values_temp, props.synonyms_temp)}
          >
            update
          </Button>}
        </Grid>
      </Grid>
    </div>
  );
}
