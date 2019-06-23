import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  field: {
    margin: '1.5em 0',
  }
}));

export default function DialogueSendButton(props) {
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
            onClick={() => props.actions.createDialogue(props.question_name, props.parent_answer_id, props.phrases, props.answers)}
          >
            create
          </Button>}
          {props.isUpdateStateEnable && <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => props.actions.updateDialogue(props.question_id, props.question_name, props.parent_answer_id, props.phrases, props.answers)}
          >
            update
          </Button>}
        </Grid>
      </Grid>
    </div>
  );
}
