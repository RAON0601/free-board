import type { Query } from '@/commons/types/types';
import { useQuery } from '@apollo/client';
import { FETCH_COMMENT } from '../comments.queries';
import CommentListUI from './list.presenter';
import type { CommentListProps } from './list.types';

export default function CommentList({ boardId }: CommentListProps) {
  const { data } = useQuery<Pick<Query, 'fetchBoardComments'>>(FETCH_COMMENT, {
    variables: {
      boardId,
    },
  });

  

  return <CommentListUI {...{ commentList: data?.fetchBoardComments, boardId }} />;
}
