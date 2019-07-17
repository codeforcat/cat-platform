import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function AdditionalImageField(props) {
  return (
    <div className={props.className}>
      <Grid
        container
        direction="column"
        spacing={3}>
        <Grid item xs={12}>
          <InputLabel htmlFor="original" required>画像のURL（最大文字数：1000）</InputLabel>
          <Input
            id="original"
            value={props.image.originalContentUrl || ''}
            onChange={(e) => props.actions.inputImageOriginal(e.target.value)}
            aria-describedby="original-helper-text"
            required
            fullWidth
            error={props.image.originalContentUrl === '' && !props.isValid}
          />
          <FormHelperText id="original-helper-text">HTTPS<br/>JPEG<br/>最大画像サイズ：4096×4096<br/>最大ファイルサイズ：1MB</FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="preview" required>プレビュー画像のURL（最大文字数：1000）</InputLabel>
          <Input
            id="preview"
            value={props.image.previewImageUrl || ''}
            onChange={(e) => props.actions.inputImagePreview(e.target.value)}
            aria-describedby="preview-helper-text"
            required
            fullWidth
            error={props.image.previewImageUrl === '' && !props.isValid}
          />
          <FormHelperText id="preview-helper-text">HTTPS<br/>JPEG<br/>最大画像サイズ：240×240<br/>最大ファイルサイズ：1MB</FormHelperText>
        </Grid>
      </Grid>
    </div>
  );
}
