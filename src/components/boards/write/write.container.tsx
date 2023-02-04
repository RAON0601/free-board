import { useMutation } from '@apollo/client';
import { CREATE_BOARD } from '../board.queries';
import type { BoardWriteProps } from './write.types';
import type { Board } from '@/commons/types/types';
import BoardForm from '../form/boardForm.container';
import { type BoardInputType } from '../form/boardForm.types';

const validateFieldNames: Array<'writer' | 'password' | 'title' | 'contents'> = [
  'writer',
  'password',
  'title',
  'contents',
];

export default function BoardWrite({ routeBoardDetail }: BoardWriteProps) {
  const [createBoardAPI] = useMutation<Record<'createBoard', Pick<Board, '_id'>>>(CREATE_BOARD);

  const onSubmit = async (data: BoardInputType) => {
    try {
      const { writer, password, title, contents } = data;
      const res = await createBoardAPI({
        variables: {
          writer,
          password,
          title,
          contents,
        },
      });

      const createdId = res.data?.createBoard._id;

      if (!createdId) {
        throw new Error('게시글 생성 중 에러가 발생 했습니다!');
      }

      alert('게시글 등록이 완료 되었습니다!');
      routeBoardDetail(createdId);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardForm
      {...{
        onSubmitHandler: onSubmit,
        validateFieldNames,
        isEdit: false,
      }}
    />
  );
}
