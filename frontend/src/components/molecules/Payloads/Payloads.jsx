import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import arrayMove from 'array-move';
import { makeStyles } from '@material-ui/core/styles';
import PayloadMessage from '../PayloadMessage/PayloadMessage.jsx';
import FormItem from '../FormItem/FormItem.jsx';
import Button from "@material-ui/core/Button";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  label: {
    paddingTop: '1em',
  },
  button: {
    marginTop: '1.5em',
  },
  payloadWrapper: {
    marginTop: '1.5em',
  }
}));

export default function Payloads(props) {
  const classes = useStyles();
  const onDrop = ({ removedIndex, addedIndex }) => {
    const newArray = arrayMove(props.payloads, removedIndex, addedIndex);
    props.actions.sortPayloadState(newArray);
  };

  return (
    <FormItem
      titleText="応答メッセージ"
      titleAlign="baseline"
      titleClass={classes.label}
    >
      <Container onDrop={onDrop} lockAxis="y" dragHandleSelector=".drag-handle">
        {props.payloads.map((item, index)=>
          <Draggable
            key={index}
            className={classes.payloadWrapper}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline"
              spacing={3}
            >
              <Grid item xs={1}>
                <DragIndicatorIcon className="drag-handle"/>
              </Grid>
              <Grid item xs={11}>
                <PayloadMessage
                  idx={index}
                  length={props.payloads.length}
                  contents={item.contents}
                  payloadTempId={item.payloadTempId}
                  isShowError={props.isShowError}
                  errorMsg={props.errorMsg}
                  actions={props.actions}
                />
              </Grid>
            </Grid>
          </Draggable>
        )}
      </Container>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.actions.addPayloadState()}
      >
        add
      </Button>
    </FormItem>
  );
}
