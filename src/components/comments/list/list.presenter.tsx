import List from '@mui/material/List';
import InfiniteScroll from 'react-infinite-scroller';
import type { CommentListUIProps } from './list.types';
import { CommentItem } from './item/item.container';

export default function CommentListUI({ commentList, boardId, onLoadMore, hasMore }: CommentListUIProps) {
  return (
    <List sx={{ width: '50vw', minWidth: '768px', margin: '20px auto 0 auto' }}>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={hasMore}>
        {commentList?.map(comment => (
          <CommentItem key={comment._id} comment={comment} boardId={boardId} />
        ))}
      </InfiniteScroll>
    </List>
  );
}
