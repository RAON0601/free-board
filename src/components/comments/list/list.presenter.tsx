import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography';

import { formatYYYYMMDD } from '@/commons/utils';
import type { CommentListUIProps } from './list.types';

export default function CommentListUI({ commentList }: CommentListUIProps) {
  return (
    <List sx={{ width: '50vw', minWidth: '768px', margin: '20px auto 0 auto' }}>
      {commentList?.map(comment => (
        <ListItem key={comment._id} sx={{ borderBottom: '1px solid #bdbdbd' }}>
          <Stack flexDirection="column" alignItems="center" justifyContent="center" sx={{ marginRight: '16px' }}>
            <ListItemAvatar>
              <Avatar sx={{ margin: '0 auto' }}>
                <PersonIcon fontSize="large" />
              </Avatar>
            </ListItemAvatar>
            <Typography variant="subtitle1" align="center">
              {comment.writer}
            </Typography>
          </Stack>

          <ListItemText
            primary={
              <Typography variant="body1" sx={{ marginBottom: '12px' }}>
                {comment.contents}
              </Typography>
            }
            secondary={<Typography variant="caption">{formatYYYYMMDD(comment.createdAt)}</Typography>}
          />
        </ListItem>
      ))}
    </List>
  );
}
