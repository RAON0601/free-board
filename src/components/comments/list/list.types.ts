import type { BoardComment } from '@/commons/types/types';

export interface CommentItemProps {
  comment: Partial<BoardComment>;
  boardId: string;
}

export interface CommentListProps {
  boardId: string;
}

export interface CommentListUIProps {
  commentList?: Array<Partial<BoardComment>>;
  boardId: string;
  onLoadMore: () => Promise<void>;
  hasMore: boolean;
}
