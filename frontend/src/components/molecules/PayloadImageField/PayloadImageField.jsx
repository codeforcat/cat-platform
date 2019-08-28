import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function PayloadImageField(props) {
  return (
    <Grid
      container
      direction="column"
      spacing={3}>
      <Grid item xs={12}>
        <InputLabel htmlFor="`original${props.idx}`" required>画像のURL（最大文字数：1000）</InputLabel>
        <Input
          id="`original${props.idx}`"
          value={props.original || ''}
          onChange={(e) => props.actions.inputImageOriginal(e.target.value, props.idx)}
          aria-describedby="`original-helper-text${props.idx}`"
          required
          fullWidth
          error={props.original === '' && !props.isValid}
        />
        <FormHelperText id="`original-helper-text${props.idx}`">HTTPS<br/>JPEG<br/>最大画像サイズ：4096×4096<br/>最大ファイルサイズ：1MB</FormHelperText>
      </Grid>
      <Grid item xs={12}>
        <InputLabel htmlFor="`preview${props.idx}`" required>プレビュー画像のURL（最大文字数：1000）</InputLabel>
        <Input
          id="`preview${props.idx}`"
          value={props.preview || ''}
          onChange={(e) => props.actions.inputImagePreview(e.target.value, props.idx)}
          aria-describedby="`preview-helper-text${props.idx}`"
          required
          fullWidth
          error={props.preview === '' && !props.isValid}
        />
        <FormHelperText id="`preview-helper-text${props.idx}`">HTTPS<br/>JPEG<br/>最大画像サイズ：240×240<br/>最大ファイルサイズ：1MB</FormHelperText>
      </Grid>
    </Grid>
  );
}
