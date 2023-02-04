import { useMutation, useQuery } from '@apollo/client';
import { FETCH_BOARD, UPDATE_BOARD } from '../board.queries';
import type { BoardEditProps, UpdateBoardRequest } from './edit.types';
import type { Board, Query, QueryFetchBoardArgs } from '@/commons/types/types';
import BoardForm from '../form/boardForm.container';
import { type BoardInputType } from '../form/boardForm.types';
import { useErrorModal, useSuccessModal } from '../commons/modal.hook';

const validateFieldNames: Array<'password' | 'title' | 'contents'> = ['title', 'contents', 'password'];

export default function BoardEdit({ id, routeBoardDetail }: BoardEditProps) {
  const { errorModalStatus, setErrorModalStatus, errorMessage, setErrorMessage, toggleErrorModal } = useErrorModal();
  const { successMessage, setSuccessModalStatus, toggleSuccessModal, setSuccessMessage, successModalStatus } =
    useSuccessModal();

  const [updateBoardAPI] = useMutation<Record<'updateBoard', Pick<Board, '_id'>>>(UPDATE_BOARD);

  const { data } = useQuery<Pick<Query, 'fetchBoard'>, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  const onSubmit = async (data: BoardInputType) => {
    try {
      const { password, title, contents, boardAddress, youtubeUrl } = data;
      const myVariables: UpdateBoardRequest = { boardId: id, password };

      if (password) myVariables.password = password;
      if (title) myVariables.title = title;
      if (contents) myVariables.contents = contents;
      if (youtubeUrl) myVariables.youtubeUrl = youtubeUrl;
      if (boardAddress) {
        myVariables.boardAddress = {
          address: boardAddress.address,
          zipcode: boardAddress.zipcode,
          addressDetail: boardAddress.addressDetail,
        };
      }

      const res = await updateBoardAPI({
        variables: myVariables,
      });

      const updateId = res.data?.updateBoard._id;

      if (!updateId) {
        throw new Error('게시글 수정중 에러가 발생 했습니다!');
      }

      setSuccessMessage('게시글 수정이 완료 되었습니다!');
      setSuccessModalStatus(true);
      setTimeout(() => {
        setSuccessModalStatus(false);
        routeBoardDetail(updateId);
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setErrorModalStatus(true);
      }
    }
  };

  return (
    <BoardForm
      {...{
        onSubmitHandler: onSubmit,
        validateFieldNames,
        isEdit: true,
        board: data?.fetchBoard,
        errorMessage,
        toggleErrorModal,
        errorModalStatus,
        successMessage,
        successModalStatus,
        toggleSuccessModal,
      }}
    />
  );
}
