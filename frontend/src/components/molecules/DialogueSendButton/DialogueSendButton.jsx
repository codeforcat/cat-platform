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
  const additional_message = () => {
    switch (props.additional_state) {
      case 'buttons':
        return props.buttons;
      case 'confirm':
        return props.confirm;
      case 'image':
        return props.image;
      default:
        return null;
    }
  };

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
            onClick={() => props.actions.createDialogue(
              props.question_name,
              props.phrases,
              props.entities,
              props.answers,
              props.additional_state,
              additional_message()
            )}
          >
            create
          </Button>}
          {props.isUpdateStateEnable && <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => props.actions.updateDialogue(
              props.question_id,
              props.question_name,
              props.phrases,
              props.entities,
              props.answers,
              props.additional_state,
              additional_message()
            )}
          >
            update
          </Button>}
        </Grid>
      </Grid>
    </div>
  );
}
