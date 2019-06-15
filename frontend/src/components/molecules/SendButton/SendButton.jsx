import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function SendButton(props) {
  return (
    <div className={props.className}>
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <Grid item xs={4} sm={3}>
          <Button variant="contained" color="primary" fullWidth>create</Button>
        </Grid>
      </Grid>
    </div>
  );
}
