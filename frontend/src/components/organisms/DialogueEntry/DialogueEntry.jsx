import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import QuestionIdField from '../../molecules/QuestionIdField/QuestionIdField.jsx';
import QuestionNameField from '../../molecules/QuestionNameField/QuestionNameField.jsx';
import PhraseFields from '../../molecules/PhraseFields/PhraseFields.jsx';
import EntityIdFieldForDialogue from '../../molecules/EntityIdFieldForDialogue/EntityIdFieldForDialogue.jsx';
import RandomCheckbox from '../../molecules/RandomCheckbox/RandomCheckbox.jsx';
import PayloadContainer from '../../../containers/PayloadContainer/PayloadContainer';
import DialogueSendButton from '../../molecules/DialogueSendButton/DialogueSendButton.jsx';

export default function DialogueEntry(props) {
  useEffect(() => {
    props.actions.fetchEntities();
  },[props.question_id]);

  return (
    <Container>
      <QuestionIdField
        id={props.question_id}
        params={props.match.params.id}
        actions={props.actions}
      />
      <QuestionNameField
        name={props.question_name}
        isValid={props.isValid}
        errorCode={props.errorCode}
        errorMsg={props.errorMsg}
        isShowError={props.isShowError}
        apiErrorMsg={props.apiErrorMsg}
        actions={props.actions}
      />
      <PhraseFields
        phrases={props.phrases}
        errorMsg={props.errorMsg}
        isShowError={props.isShowError}
        actions={props.actions}
      />
      <EntityIdFieldForDialogue
        entities={props.entities}
        exists_entities={props.exists_entities}
        actions={props.actions}
      />
      <RandomCheckbox
        random={props.random}
        actions={props.actions}
      />
      <PayloadContainer/>
      <DialogueSendButton
        isUpdateStateEnable={props.isUpdateStateEnable}
        question_id={props.question_id}
        question_name={props.question_name}
        phrases={props.phrases}
        entities={props.entities}
        random={props.random}
        actions={props.actions}
      />
    </Container>
  );
}
