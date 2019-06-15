import React, { useState } from 'react';
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
  const [chipData, setChipData] = useState(['Angular', 'jQuery', 'Polymer', 'React', 'Vue.js']);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip !== chipToDelete));
  };

  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} sm={2}>
          <InputLabel htmlFor="`value${props.index}`" required>Value</InputLabel>
          <Input id="`value${props.index}`" required fullWidth/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <InputLabel htmlFor="`synonyms${props.index}`">Synonyms</InputLabel>
          <Input id="`synonyms${props.index}`"/>
          <div className={classes.chips}>
            {chipData.map((item, index) =>
              <Chip
                key={index}
                label={item}
                onDelete={handleDelete(item)}
              />
            )}
          </div>
        </Grid>
        {props.delete && <Grid item xs={12} sm={2}>
          <Button variant="contained">delete</Button>
        </Grid>}
      </Grid>
    </div>
  );
}
