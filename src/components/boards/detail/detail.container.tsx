import BoardDetailUI from './detail.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOARD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from '../board.queries';
import type { BoardDetailProps } from './detail.type';
import type { Query, QueryFetchBoardArgs } from '@/commons/types/types';
import { useErrorModal } from '../commons/modal.hook';

export default function BoardDetail({ boardId, routeBoardList, routeBoardEdit }: BoardDetailProps) {
  const [deleteBoardAPI] = useMutation(DELETE_BOARD);
  const [likeBoardAPI] = useMutation(LIKE_BOARD);
  const [dislikeBoardAPI] = useMutation(DISLIKE_BOARD);
  const { errorModalStatus, setErrorModalStatus, errorMessage, setErrorMessage, toggleErrorModal } = useErrorModal();

  const { data } = useQuery<Pick<Query, 'fetchBoard'>, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId,
    },
  });

  const dislikeBoard = async () => {
    try {
      void dislikeBoardAPI({
        variables: {
          boardId,
        },
        refetchQueries: [FETCH_BOARD],
      });
    } catch (e) {
      setErrorMessage('서버에 에러가 발생했습니다');
      setErrorModalStatus(true);
    }
  };

  const likeBoard = async () => {
    try {
      void likeBoardAPI({
        variables: {
          boardId,
        },
        refetchQueries: [FETCH_BOARD],
      });
    } catch (e) {
      setErrorMessage('서버에 에러가 발생했습니다');
      setErrorModalStatus(true);
    }
  };

  const deleteBoard = async (id: string) => {
    try {
      if (confirm('게시글을 삭제 하시겠습니까?')) {
        await deleteBoardAPI({
          variables: {
            boardId: id,
          },
        });
        routeBoardList();
      }
    } catch (error) {
      setErrorMessage('게시글 삭제중 에러가 발생했습니다!');
      setErrorModalStatus(true);
    }
  };

  return (
    <BoardDetailUI
      {...{
        board: data?.fetchBoard,
        deleteBoard,
        routeBoardList,
        routeBoardEdit,
        likeBoard,
        dislikeBoard,
        errorModalStatus,
        toggleErrorModal,
        errorMessage,
      }}
    />
  );
}
