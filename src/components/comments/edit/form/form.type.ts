import { type CreateBoardCommentInput, type BoardComment } from '@/commons/types/types';
import { type Dispatch, type SetStateAction } from 'react';
import { type UseFormRegister } from 'react-hook-form';

export interface CommentEditFormProps {
  rating: number | null;
  setRating: (data: number | null) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  comment: Partial<BoardComment>;
  handleClickOpen: () => void;
  register: UseFormRegister<Partial<CreateBoardCommentInput>>;
}
