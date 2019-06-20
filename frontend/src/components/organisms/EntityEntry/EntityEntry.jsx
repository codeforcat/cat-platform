import React from 'react';
import Container from '@material-ui/core/Container';
import EntityIdField from '../../molecules/EntityIdField/EntityIdField.jsx';
import EntityNameField from '../../molecules/EntityNameField/EntityNameField.jsx';
import EntityValueSynonyms from '../../molecules/EntityValueSynonyms/EntityValueSynonyms.jsx';
import SendButton from '../../molecules/SendButton/SendButton.jsx';

export default function EntityEntry(props) {
  return (
    <Container>
      <EntityIdField/>
      <EntityNameField/>
      <EntityValueSynonyms/>
      <SendButton/>
    </Container>
  );
}
