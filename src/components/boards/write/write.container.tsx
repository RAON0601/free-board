import BoardWriteUI from './write.presenter';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { makeObjectFrom, validateObjectValue } from '@/commons/utils';
import { CREATE_BOARD } from '../board.queries';
import type { BoardWriteProps } from './write.types';
import type { Board } from '@/commons/types/types';

export default function BoardWrite({ routeBoardDetail }: BoardWriteProps) {
  const [createBoardAPI] = useMutation<Record<'createBoard', Pick<Board, '_id'>>>(CREATE_BOARD);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validateFieldNames = ['writer', 'password', 'title', 'contents'];
  const validateFields = watch(validateFieldNames);

  const validateInput = () => validateObjectValue(makeObjectFrom(validateFieldNames, validateFields));

  const onSubmit = handleSubmit(async data => {
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
  });

  return <BoardWriteUI {...{ onSubmit, register, errors, validateInput }} />;
}
