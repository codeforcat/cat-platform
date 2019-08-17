import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhraseTextField from '../PhraseTextField/PhraseTextField.jsx';
import Button from '@material-ui/core/Button';
import FormItem from '../FormItem/FormItem.jsx';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '1em',
  }
}));

export default function PhraseFields(props) {
  const classes = useStyles();
  const phrase_list = props.phrases;

  return (
    <FormItem
      titleText="Questionのフレーズ<br/>（言い替え）"
      titleAlign="flex-start"
      isRequired={true}
    >
      {phrase_list.map((item, index)=>
        <PhraseTextField
          key={index}
          first={index === 0}
          length={phrase_list.length}
          text={item.phrase_text}
          idx={index}
          temp_id={item.phrase_temp_id}
          isValid={item.isValid}
          errorCode={item.errorCode}
          errorMsg={props.errorMsg}
          isShowError={props.isShowError}
          actions={props.actions}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.actions.addPhraseText()}
      >
        add
      </Button>
    </FormItem>
  );
}
