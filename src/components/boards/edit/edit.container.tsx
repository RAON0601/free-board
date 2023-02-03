import BoardEditUI from './edit.presenter';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { makeObjectFrom, validateObjectValue } from '@/commons/utils';
import { FETCH_BOARD, UPDATE_BOARD } from '../board.queries';
import type { BoardEditInput, BoardEditProps, BoardEditValidateFields, updateBoardRequest } from './edit.types';
import type { Board, Query, QueryFetchBoardArgs } from '@/commons/types/types';

export default function BoardEdit({ id, routeBoardDetail }: BoardEditProps) {
  const [updateBoardAPI] = useMutation<Record<'updateBoard', Pick<Board, '_id'>>>(UPDATE_BOARD);

  const { data } = useQuery<Pick<Query, 'fetchBoard'>, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  const [isEdit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BoardEditInput>({
    defaultValues: {
      title: '',
      contents: '',
      password: '',
    },
    values: {
      title: data?.fetchBoard.title ?? '',
      password: '',
      contents: data?.fetchBoard.contents ?? '',
    },
  });

  const validateFieldNames: BoardEditValidateFields = ['title', 'contents', 'password'];
  const validateFields = watch(validateFieldNames);

  const validateInput = () => validateObjectValue(makeObjectFrom(validateFieldNames, validateFields));

  const onSubmit = handleSubmit(async data => {
    try {
      const { password, title, contents } = data;
      const myVariables: updateBoardRequest = { boardId: id };
      if (password) myVariables.password = password;
      if (title) myVariables.title = title;
      if (contents) myVariables.contents = contents;

      const res = await updateBoardAPI({
        variables: myVariables,
      });

      const updateId = res.data?.updateBoard._id;

      if (!updateId) {
        throw new Error('게시글 수정중 에러가 발생 했습니다!');
      }

      alert('게시글 수정이 완료 되었습니다!');
      routeBoardDetail(updateId);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  });

  useEffect(() => setEdit(true), []);

  return (
    <BoardEditUI
      {...{
        onSubmit,
        register,
        errors,
        validateInput,
        isEdit,
        board: data?.fetchBoard,
      }}
    />
  );
}
