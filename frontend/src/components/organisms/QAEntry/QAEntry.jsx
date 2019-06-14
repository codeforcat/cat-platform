import React from 'react';
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

  return (
    <Container>
      <QuestionIdField className={classes.field}/>
      <ParentAnswerIdField className={classes.field}/>
      <QuestionNameField className={classes.field}/>
      <PhraseFields className={classes.field}/>
      <AnswerTextField className={classes.field}/>
      <AdditionalMessage className={classes.field}/>
      <SendButton className={classes.field}/>
    </Container>
  );
}
