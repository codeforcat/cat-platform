import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EntityIdField from '../../molecules/EntityIdField/EntityIdField.jsx';
import EntityNameField from '../../molecules/EntityNameField/EntityNameField.jsx';
import EntityValueSynonyms from '../../molecules/EntityValueSynonyms/EntityValueSynonyms.jsx';
import SendButton from '../../molecules/SendButton/SendButton.jsx';

const useStyles = makeStyles(theme => ({
  field: {
    margin: '1.5em 0',
  }
}));

export default function EntityEntry(props) {
  const classes = useStyles();

  return (
    <Container>
      <EntityIdField className={classes.field}/>
      <EntityNameField className={classes.field}/>
      <EntityValueSynonyms className={classes.field}/>
      <SendButton className={classes.field}/>
    </Container>
  );
}
