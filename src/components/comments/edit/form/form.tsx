import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { formatYYYYMMDD } from '@/commons/utils';
import { YellowTextField } from '@/components/boards/form/boardForm.style';
import { Button } from '@mui/material';
import { type CommentEditFormProps } from './form.type';

export function CommentEditForm({
  comment,
  setRating,
  rating,
  setIsEdit,
  handleClickOpen,
  register,
}: CommentEditFormProps) {
  return (
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
        <Rating name="read-only" value={rating} onChange={(_, newValue) => setRating(newValue)} />
      </Stack>

      <ListItemText
        primary={<YellowTextField sx={{ width: '100%' }} multiline rows={2} {...register('contents')} />}
        secondary={
          <Stack flexDirection="row" alignItems="center" justifyContent="space-between" sx={{ marginTop: '10px' }}>
            <Typography variant="caption">{formatYYYYMMDD(comment.createdAt)}</Typography>
            <Stack flexDirection="row">
              <Button color="yellow" variant="contained" sx={{ marginRight: '8px' }} onClick={handleClickOpen}>
                수정
              </Button>
              <Button color="black" variant="contained" onClick={() => setIsEdit(false)}>
                취소
              </Button>
            </Stack>
          </Stack>
        }
      />
    </ListItem>
  );
}
