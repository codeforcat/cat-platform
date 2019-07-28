import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import EntityTable from '../../molecules/EntityTable/EntityTable.jsx';
import DeleteDialog from '../../molecules/DeleteDialog/DeleteDialog.jsx';

export default function EntityList(props) {
  useEffect(() => {
    props.actions.initEntity();
  },[props.temp]);

  return (
    <Container>
      <EntityTable
        next={props.next}
        previous={props.previous}
        list={props.list}
        actions={props.actions}
      />
      <DeleteDialog
        open={props.isOpenDeleteDialog}
        name={props.targetDeleteName}
        id={props.targetDeleteId}
        close={props.actions.closeDeleteDialog}
        delete={props.actions.deleteEntity}
        actions={props.actions}
      />
    </Container>
  );
}
