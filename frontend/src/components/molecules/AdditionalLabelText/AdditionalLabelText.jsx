import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default function AdditionalLabelText(props) {
  return (
    <div className={props.className}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={5}>
          <InputLabel htmlFor="`label${props.index}`" required>ラベル</InputLabel>
          <Input id="`label${props.index}`" required fullWidth/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <InputLabel htmlFor="`text${props.index}`" required>送信されるテキスト</InputLabel>
          <Input id="`text${props.index}`" required fullWidth/>
        </Grid>
        {props.delete && <Grid item xs={12} sm={2}>
          <Button variant="contained">delete</Button>
        </Grid>}
      </Grid>
    </div>
  );
}
