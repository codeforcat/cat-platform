import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import DialogueTable from '../../molecules/DialogueTable/DialogueTable.jsx';
import DeleteDialog from '../../molecules/DeleteDialog/DeleteDialog.jsx';

export default function DialogueList(props) {
  useEffect(() => {
    props.actions.initDialogue();
  },[props.temp]);

  return (
    <Container>
      <DialogueTable
        list={props.list}
        actions={props.actions}
      />
      <DeleteDialog
        open={props.isOpenDeleteDialog}
        name={props.targetDeleteName}
        id={props.targetDeleteId}
        close={props.actions.closeDeleteDialog}
        delete={props.actions.deleteDialogue}
        actions={props.actions}
      />
    </Container>
  );
}
