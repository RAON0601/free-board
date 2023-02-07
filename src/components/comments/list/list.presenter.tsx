import List from '@mui/material/List';

import type { CommentListUIProps } from './list.types';
import { CommentItem } from './item/item.container';

export default function CommentListUI({ commentList, boardId }: CommentListUIProps) {
  return (
    <List sx={{ width: '50vw', minWidth: '768px', margin: '20px auto 0 auto' }}>
      {commentList?.map(comment => (
        <CommentItem key={comment._id} comment={comment} boardId={boardId} />
      ))}
    </List>
  );
}
