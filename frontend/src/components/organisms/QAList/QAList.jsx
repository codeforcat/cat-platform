import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import QATable from '../../molecules/QATable/QATable.jsx';
import DeleteDialog from '../../molecules/DeleteDialog/DeleteDialog.jsx';

export default function QAList(props) {
  useEffect(() => {
    props.actions.initDialogue();
  },[props.temp]);

  return (
    <Container>
      <QATable
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
