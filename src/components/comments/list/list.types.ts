import type { BoardComment } from '@/commons/types/types';

export interface CommentListProps {
  boardId: string;
}

export interface CommentListUIProps {
  commentList?: Array<Partial<BoardComment>>;
}
