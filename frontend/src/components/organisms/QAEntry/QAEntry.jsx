import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import QuestionIdField from '../../molecules/QuestionIdField/QuestionIdField.jsx';
import ParentAnswerIdField from '../../molecules/ParentAnswerIdField/ParentAnswerIdField.jsx';
import QuestionNameField from '../../molecules/QuestionNameField/QuestionNameField.jsx';
import PhraseFields from '../../molecules/PhraseFields/PhraseFields.jsx';
import AnswerTextField from '../../molecules/AnswerTextField/AnswerTextField.jsx';
import AdditionalMessage from '../../molecules/AdditionalMessage/AdditionalMessage.jsx';
import SendButton from '../../molecules/SendButton/SendButton.jsx';

const useStyles = makeStyles(theme => ({
  field: {
    margin: '1.5em 0',
  }
}));

export default function QAEntry(props) {
  const classes = useStyles();

  useEffect(() => {
    props.actions.fetchAnswers();
  },[props.parent_answer_id]);

  return (
    <Container>
      <QuestionIdField
        className={classes.field}
        id={props.question_id}
        actions={props.actions}
      />
      <ParentAnswerIdField
        className={classes.field}
        parent_answer_id={props.parent_answer_id}
        exists_answers={props.exists_answers}
        actions={props.actions}
      />
      <QuestionNameField
        className={classes.field}
        name={props.question_name}
        actions={props.actions}
      />
      <PhraseFields
        className={classes.field}
        phrases={props.phrases}
        actions={props.actions}
      />
      {props.answers.map((item, index) =>
        <div key={index}>
          <AnswerTextField
            className={classes.field}
            answer_text={item.answer_text}
            idx={index}
            actions={props.actions}
          />
          <AdditionalMessage
            className={classes.field}
            additional_state={item.additional_state}
            additional_message={item.additional_message}
            idx={index}
            actions={props.actions}
          />
        </div>
      )}
      <SendButton
        className={classes.field}
        isUpdateStateEnable={props.isUpdateStateEnable}
        question_id={props.question_id}
        question_name={props.question_name}
        parent_answer_id={props.parent_answer_id}
        phrases={props.phrases}
        answers={props.answers}
        actions={props.actions}
      />
    </Container>
  );
}
