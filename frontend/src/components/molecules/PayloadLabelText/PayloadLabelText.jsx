import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function PayloadLabelText(props) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} sm={5}>
        <InputLabel htmlFor="`type${props.payloadIdx}-${props.idx}`">タイプ</InputLabel>
        <Select
          value={props.item.type || 'message'}
          onChange={(e) => props.inputType(e.target.value, props.idx, props.payloadIdx)}
          input={<Input id="`type${props.payloadIdx}-${props.idx}`"/>}
          fullWidth
        >
          <MenuItem value="message">メッセージアクション</MenuItem>
          <MenuItem value="postback">ポストバックアクション</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={5}>
        {props.item.type === 'postback' && <div>
          <InputLabel htmlFor="`data${props.payloadIdx}-${props.idx}`" required>データ</InputLabel>
          <Input
            id="`data${props.payloadIdx}-${props.idx}`"
            value={props.item.data || ''}
            onChange={(e) => props.inputData(e.target.value, props.idx, props.payloadIdx)}
            required
            fullWidth
            error={props.item.data === '' && !props.isValid}
          />
        </div>}
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel htmlFor="`label${props.payloadIdx}-${props.idx}`" required>ラベル</InputLabel>
        <Input
          id="`label${props.payloadIdx}-${props.idx}`"
          value={props.item.label || ''}
          onChange={(e) => props.inputLabel(e.target.value, props.idx, props.payloadIdx)}
          required
          fullWidth
          error={props.item.label === '' && !props.isValid}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <InputLabel htmlFor="`text${props.payloadIdx}-${props.idx}`" required>送信されるテキスト</InputLabel>
        {props.item.type === 'message' && <Input
          id="`text${props.payloadIdx}-${props.idx}`"
          value={props.item.text || ''}
          onChange={(e) => props.inputText(e.target.value, props.idx, props.payloadIdx)}
          required
          fullWidth
          error={props.item.text === '' && !props.isValid}
        />}
        {props.item.type === 'postback' && <Input
          id="`text${props.payloadIdx}-${props.idx}`"
          value={props.item.displayText || ''}
          onChange={(e) => props.inputDisplayText(e.target.value, props.idx, props.payloadIdx)}
          required
          fullWidth
          error={props.item.displayText === '' && !props.isValid}
        />}
      </Grid>
      {props.delete && <Grid item xs={12} sm={2}>
        <Button variant="contained">delete</Button>
      </Grid>}
    </Grid>
  );
}
