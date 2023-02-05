import { type CreateBoardCommentInput } from '@/commons/types/types';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CREATE_COMMENT, FETCH_COMMENT } from '../comments.queries';
import CommentForm from '../form/form';
import type { CommentWriteProps } from './write.types';

export default function CommentWrite({ boardId }: CommentWriteProps) {
  const [createCommentAPI] = useMutation(CREATE_COMMENT);
  const [rating, setRating] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<CreateBoardCommentInput>>();

  const onRatingChange = (number: number | null) => setRating(number);

  const onSubmit = handleSubmit(async data => {
    try {
      const { writer, contents, password } = data;
      await createCommentAPI({
        variables: {
          writer,
          contents,
          password,
          boardId,
          rating,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: {
              boardId,
            },
          },
        ],
      });
      setRating(0);
      reset();
    } catch (err) {
      console.log(err);
      alert('댓글 등록이 실패 했습니다');
    }
  });

  return <CommentForm {...{ register, onSubmit, errors, rating, onRatingChange }} />;
}
