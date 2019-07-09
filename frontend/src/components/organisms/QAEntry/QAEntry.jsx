import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import QuestionIdField from '../../molecules/QuestionIdField/QuestionIdField.jsx';
import ParentAnswerIdField from '../../molecules/ParentAnswerIdField/ParentAnswerIdField.jsx';
import QuestionNameField from '../../molecules/QuestionNameField/QuestionNameField.jsx';
import PhraseFields from '../../molecules/PhraseFields/PhraseFields.jsx';
import AnswerTextField from '../../molecules/AnswerTextField/AnswerTextField.jsx';
import AdditionalMessage from '../../molecules/AdditionalMessage/AdditionalMessage.jsx';
import DialogueSendButton from '../../molecules/DialogueSendButton/DialogueSendButton.jsx';

export default function QAEntry(props) {
  // useEffect(() => {
  //   props.actions.fetchAnswers();
  // },[props.exists_answers]);

  return (
    <Container>
      <QuestionIdField
        id={props.question_id}
        params={props.match.params.id}
        actions={props.actions}
      />
      <ParentAnswerIdField
        parent_answer_id={props.parent_answer_id}
        exists_answers={props.exists_answers}
        actions={props.actions}
      />
      <QuestionNameField
        name={props.question_name}
        actions={props.actions}
      />
      <PhraseFields
        phrases={props.phrases}
        actions={props.actions}
      />
      {props.answers.map((item, index) =>
        <AnswerTextField
          key={index}
          answer_text={item.answer_text}
          idx={index}
          actions={props.actions}
        />
      )}
      <AdditionalMessage
        additional_state={props.additional_state}
        buttons_number={props.buttons_number}
        buttons={props.buttons}
        confirm={props.confirm}
        image={props.image}
        actions={props.actions}
      />
      <DialogueSendButton
        isUpdateStateEnable={props.isUpdateStateEnable}
        question_id={props.question_id}
        question_name={props.question_name}
        parent_answer_id={props.parent_answer_id}
        phrases={props.phrases}
        answers={props.answers}
        additional_state={props.additional_state}
        buttons={props.buttons}
        confirm={props.confirm}
        image={props.image}
        actions={props.actions}
      />
    </Container>
  );
}
