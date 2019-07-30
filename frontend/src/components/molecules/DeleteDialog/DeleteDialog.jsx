import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteDialog(props) {
  function handleClose() {
    props.close();
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"削除しますか？"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          「{props.name}」を本当に削除しますか？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
        >
          キャンセル
        </Button>
        <Button
          onClick={() => props.delete(props.id, props.current, props.count)}
          color="primary"
        >
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
}
