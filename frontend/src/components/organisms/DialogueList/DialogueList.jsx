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
        current={props.current}
        next={props.next}
        previous={props.previous}
        list={props.list}
        actions={props.actions}
      />
      <DeleteDialog
        open={props.isOpenDeleteDialog}
        name={props.targetDeleteName}
        id={props.targetDeleteId}
        current={props.current}
        count={props.count}
        close={props.actions.closeDeleteDialog}
        delete={props.actions.deleteDialogue}
        actions={props.actions}
      />
    </Container>
  );
}
