import { useMutation } from '@apollo/client';
import { CREATE_BOARD } from '../board.queries';
import type { BoardWriteProps } from './write.types';
import type { Board } from '@/commons/types/types';
import BoardForm from '../form/boardForm.container';
import { type BoardInputType } from '../form/boardForm.types';
import { useErrorModal, useSuccessModal } from '../commons/modal.hook';

const validateFieldNames: Array<'writer' | 'password' | 'title' | 'contents'> = [
  'writer',
  'password',
  'title',
  'contents',
];

export default function BoardWrite({ routeBoardDetail }: BoardWriteProps) {
  const { errorModalStatus, setErrorModalStatus, errorMessage, setErrorMessage, toggleErrorModal } = useErrorModal();
  const { successMessage, setSuccessModalStatus, toggleSuccessModal, setSuccessMessage, successModalStatus } =
    useSuccessModal();

  const [createBoardAPI] = useMutation<Record<'createBoard', Pick<Board, '_id'>>>(CREATE_BOARD);

  const onSubmit = async (data: BoardInputType) => {
    try {
      const { password, title, contents, boardAddress, youtubeUrl, writer } = data;
      const res = await createBoardAPI({
        variables: {
          writer,
          password,
          title,
          contents,
          youtubeUrl,
          boardAddress,
        },
      });

      const createdId = res.data?.createBoard._id;

      if (!createdId) {
        throw new Error('게시글 생성 중 에러가 발생 했습니다!');
      }

      setSuccessMessage('게시글 등록이 완료 되었습니다!');
      setSuccessModalStatus(true);
      setTimeout(() => {
        setSuccessModalStatus(false);
        routeBoardDetail(createdId);
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
        isEdit: false,
        successMessage,
        successModalStatus,
        toggleSuccessModal,
        errorMessage,
        errorModalStatus,
        toggleErrorModal,
      }}
    />
  );
}
