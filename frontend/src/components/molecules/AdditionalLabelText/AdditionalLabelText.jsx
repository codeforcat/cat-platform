import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function AdditionalLabelText(props) {
  const [type, setType] = useState('message');

  function handleChange(event) {
    setType(event.target.value);
  }

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
          <InputLabel htmlFor="`type${props.index}`">タイプ</InputLabel>
          <Select
            value={type}
            onChange={handleChange}
            input={<Input id="`type${props.index}`"/>}
            fullWidth
          >
            <MenuItem value="message">メッセージアクション</MenuItem>
            <MenuItem value="postback">ポストバックアクション</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={5}>
          {type === 'postback' && <div>
            <InputLabel htmlFor="`data${props.index}`" required>データ</InputLabel>
            <Input id="`data${props.index}`" required fullWidth/>
          </div>}
        </Grid>
        <Grid item xs={12} sm={5}>
          <InputLabel htmlFor="`label${props.index}`" required>ラベル</InputLabel>
          <Input id="`label${props.index}`" required fullWidth/>
        </Grid>
        <Grid item xs={12} sm={5}>
          {type === 'message' && <div>
            <InputLabel htmlFor="`text${props.index}`" required>送信されるテキスト</InputLabel>
            <Input id="`text${props.index}`" required fullWidth/>
          </div>}
          {type === 'postback' && <div>
            <InputLabel htmlFor="`displayText${props.index}`" required>送信されるテキスト</InputLabel>
            <Input id="`displayText${props.index}`" required fullWidth/>
          </div>}
        </Grid>
        {props.delete && <Grid item xs={12} sm={2}>
          <Button variant="contained">delete</Button>
        </Grid>}
      </Grid>
    </div>
  );
}
