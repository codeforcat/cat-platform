import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  chips: {
    margin: '1em 0',
  }
}));

export default function EntityValueSynonymField(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      <Grid item xs={12} sm={2}>
        <InputLabel htmlFor="`value${props.idx}`" required>Value</InputLabel>
        <Input
          id="`value${props.idx}`"
          value={props.item.value_text}
          onChange={(e) => props.actions.inputValueText(e.target.value, props.idx)}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <InputLabel htmlFor="`synonyms${props.idx}`">Synonyms</InputLabel>
        <Input
          id="`synonyms${props.idx}`"
          value={props.item.synonym_temp_text}
          onChange={(e) => props.actions.inputSynonymText(e.target.value, props.idx)}
          onKeyDown={(e) => {if(e.key === 'Enter') props.actions.addSynonym(e.target.value, props.idx)}}
        />
        <div className={classes.chips}>
          {props.synonyms.map((item, index) =>
            <Chip
              key={index}
              label={item.synonym_text}
              onDelete={() => props.actions.deleteSynonym(item.synonym_temp_id, props.idx)}
            />
          )}
        </div>
      </Grid>
      {props.delete && <Grid item xs={12} sm={2}>
        <Button
          variant="contained"
          onClick={() => props.actions.deleteValue(props.idx, props.item.value_temp_id)}
        >
          delete
        </Button>
      </Grid>}
    </Grid>
  );
}
