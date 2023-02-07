import { YellowTextField } from '@/components/boards/form/boardForm.style';
import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { DELETE_COMMENT, FETCH_COMMENT } from '../comments.queries';
import { type CommentDeleteDialogProps } from './delete.dialog.type';

export function CommentDeleteDialog({
  deleteDialogOpen,
  handleDeleteDialogClose,
  commentId,
  boardId,
}: CommentDeleteDialogProps) {
  const [deleteCommentAPI] = useMutation(DELETE_COMMENT);

  const { register, handleSubmit, reset } = useForm<{ password: string }>();

  const onSubmit = handleSubmit(async data => {
    try {
      const { password } = data;

      await deleteCommentAPI({
        variables: {
          password,
          commentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: {
              boardId,
            },
          },
        ],
      });
      reset();
      handleDeleteDialogClose();
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <Dialog
      open={deleteDialogOpen}
      onClose={handleDeleteDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'댓글 삭제'}</DialogTitle>
      <DialogContent sx={{ width: '400px' }}>
        <DialogContentText id="alert-dialog-description">삭제 하시겠습니까?</DialogContentText>
        <YellowTextField sx={{ width: '100%', marginTop: '16px' }} placeholder="비밀번호" {...register('password')} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteDialogClose} color="black" variant="contained">
          취소
        </Button>
        <Button onClick={onSubmit} autoFocus color="yellow" variant="contained">
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}
