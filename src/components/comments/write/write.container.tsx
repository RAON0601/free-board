import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { CREATE_COMMENT, FETCH_COMMENT } from '../comments.queries';
import CommentForm from '../form/form';
import type { CommentCreateInput, CommentWriteProps } from './write.types';

// const MAX_CONTENTS = 100;

export default function CommentWrite({ boardId }: CommentWriteProps) {
  const [createCommentAPI] = useMutation(CREATE_COMMENT);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CommentCreateInput>();

  const onSubmit = handleSubmit(async data => {
    try {
      const { writer, contents, password } = data;
      await createCommentAPI({
        variables: {
          writer,
          contents,
          password,
          boardId,
          rating: 4.0,
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
      alert('댓글 등록이 완료 되었습니다.');
    } catch (err) {
      console.log(err);
      alert('댓글 등록이 실패 했습니다');
    }
  });

  // TODO 이거 나중에 작업
  // const curContent = watch('contents');

  return <CommentForm {...{ register, onSubmit, errors }} />;
}
