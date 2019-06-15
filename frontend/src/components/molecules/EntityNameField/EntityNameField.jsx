import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default function EntityNameField(props) {
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
          <InputLabel htmlFor="entity-name" required>Entityの名前</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Input id="entity-name" required fullWidth/>
        </Grid>
      </Grid>
    </div>
  );
}