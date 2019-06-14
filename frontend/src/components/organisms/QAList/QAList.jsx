import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import QATable from '../../molecules/QATable/QATable.jsx';

const useStyles = makeStyles(theme => ({
  field: {
    margin: '1.5em 0',
  }
}));

export default function QAList(props) {
  const classes = useStyles();

  return (
    <Container>
      <QATable/>
    </Container>
  );
}
