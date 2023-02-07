import type { Query } from '@/commons/types/types';
import { useQuery } from '@apollo/client';

import { FETCH_COMMENT } from '../comments.queries';
import CommentWrite from '../write/write.container';
import CommentListUI from './list.presenter';
import type { CommentListProps } from './list.types';

export default function CommentList({ boardId }: CommentListProps) {
  const { data, fetchMore } = useQuery<Pick<Query, 'fetchBoardComments'>>(FETCH_COMMENT, {
    variables: {
      boardId,
    },
  });

  const onLoadMore = async () => {
    if (!data) return;

    await fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };

  return (
    <>
      <CommentWrite {...{ boardId }} />
      <CommentListUI {...{ commentList: data?.fetchBoardComments, boardId, onLoadMore, hasMore: true }} />
    </>
  );
}
