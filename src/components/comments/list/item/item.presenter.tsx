import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { formatYYYYMMDD } from '@/commons/utils';
import { type CommentItemUIProps } from './item.type';
import { CommentEditForm } from '../../edit/form/form';
import { CommentEditDialog } from '../../dialog/edit.dialog';
import { CommentDeleteDialog } from '../../dialog/delete.dialog';

export function CommentItemUI({
  isEdit,
  comment,
  rating,
  setRating,
  handleClickOpen,
  setIsEdit,
  register,
  handleClose,
  onSubmit,
  open,
  deleteDialogOpen,
  handleDeleteDialogClose,
  handleDeleteDialogOpen,
  boardId,
}: CommentItemUIProps) {
  return (
    <>
      {isEdit ? (
        <CommentEditForm {...{ rating, setRating, comment, handleClickOpen, setIsEdit, register }} />
      ) : (
        <ListItem sx={{ borderBottom: '1px solid #bdbdbd' }}>
          <Stack flexDirection="column" alignItems="center" justifyContent="center" sx={{ marginRight: '16px' }}>
            <ListItemAvatar>
              <Avatar sx={{ margin: '0 auto' }}>
                <PersonIcon fontSize="large" />
              </Avatar>
            </ListItemAvatar>

            <Typography variant="subtitle1" align="center">
              {comment.writer}
            </Typography>
            <Rating name="read-only" value={comment.rating} readOnly />
          </Stack>

          <ListItemText
            primary={
              <Stack flexDirection="row" justifyContent="space-between">
                <Typography variant="body1" sx={{ marginBottom: '42px' }}>
                  {comment.contents}
                </Typography>
                <Stack flexDirection="row">
                  <Typography
                    variant="body1"
                    sx={{ marginRight: '8px', cursor: 'pointer' }}
                    onClick={() => setIsEdit(true)}
                  >
                    ??????
                  </Typography>
                  <Typography variant="body1" sx={{ cursor: 'pointer' }} onClick={handleDeleteDialogOpen}>
                    ??????
                  </Typography>
                </Stack>
              </Stack>
            }
            secondary={<Typography variant="caption">{formatYYYYMMDD(comment.createdAt)}</Typography>}
          />
        </ListItem>
      )}

      <CommentEditDialog {...{ open, handleClose, onSubmit, register }} />
      <CommentDeleteDialog {...{ deleteDialogOpen, handleDeleteDialogClose, commentId: comment._id, boardId }} />
    </>
  );
}
