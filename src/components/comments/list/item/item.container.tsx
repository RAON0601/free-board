import { type CommentItemProps } from '../list.types';
import { type CreateBoardCommentInput } from '@/commons/types/types';
import { useMutation } from '@apollo/client';
import { CommentItemUI } from './item.presenter';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FETCH_COMMENT, UPDATE_COMMENT } from '../../comments.queries';

export const CommentItem = ({ comment, boardId }: CommentItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [rating, setRating] = useState(comment.rating ?? null);
  const [open, setOpen] = useState(false);
  const [updateCommentAPI] = useMutation(UPDATE_COMMENT);

  const { register, handleSubmit, reset } = useForm<Partial<CreateBoardCommentInput>>({
    defaultValues: {
      contents: comment.contents,
      password: '',
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
    console.log('close');
  };

  const onSubmit = handleSubmit(async data => {
    try {
      const { contents, password } = data;

      await updateCommentAPI({
        variables: {
          contents,
          rating,
          password,
          commentId: comment._id,
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

      reset();
      setOpen(false);
      setIsEdit(false);
    } catch (err) {
      console.log(err);
      alert('댓글 등록이 실패 했습니다');
    }
  });

  return (
    <CommentItemUI
      {...{ register, comment, isEdit, setIsEdit, rating, setRating, handleClickOpen, onSubmit, handleClose, open }}
    />
  );
};
