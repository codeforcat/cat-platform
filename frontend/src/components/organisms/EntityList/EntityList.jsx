import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import EntityTable from '../../molecules/EntityTable/EntityTable.jsx';

export default function EntityList(props) {
  useEffect(() => {
    props.actions.initEntity();
  },[props.temp]);

  return (
    <Container>
      <EntityTable
        list={props.list}
        actions={props.actions}
      />
    </Container>
  );
}
