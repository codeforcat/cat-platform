import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function EntityIdField(props) {
  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={3}>
          <InputLabel htmlFor="entity-id">Entity ID</InputLabel>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input id="entity-id" aria-describedby="entity-id-helper-text"/>
          <FormHelperText id="entity-id-helper-text">※新規追加時は空欄</FormHelperText>
        </Grid>
      </Grid>
    </div>
  );
}
