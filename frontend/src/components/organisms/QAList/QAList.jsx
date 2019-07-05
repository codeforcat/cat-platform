import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import QATable from '../../molecules/QATable/QATable.jsx';

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
    </Container>
  );
}
