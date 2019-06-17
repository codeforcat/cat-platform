import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function SendButton(props) {
  return (
    <div className={props.className}>
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
