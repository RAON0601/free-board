import { YellowTextField } from '@/components/boards/form/boardForm.style';
import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { type CommentEditDialogProps } from './edit.dialog.type';

export function CommentEditDialog({ handleClose, register, onSubmit, open }: CommentEditDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ width: '400px', fontWeight: 700 }}>
        {'댓글 수정'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ marginBottom: '16px' }}>
          비밀번호 확인
        </DialogContentText>
        <YellowTextField type="password" sx={{ width: '100%' }} fullWidth {...register('password')} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="black">
          취소
        </Button>
        <Button onClick={onSubmit} autoFocus color="black">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}
