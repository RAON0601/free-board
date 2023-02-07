import { type CreateBoardCommentInput, type BoardComment } from '@/commons/types/types';
import { type BaseSyntheticEvent, type Dispatch, type SetStateAction } from 'react';
import { type UseFormRegister } from 'react-hook-form';

export interface CommentItemUIProps {
  isEdit: boolean;
  rating: number | null;
  open: boolean;
  deleteDialogOpen: boolean;
  handleDeleteDialogOpen: () => void;
  handleDeleteDialogClose: () => void;
  setRating: (data: number | null) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  comment: Partial<BoardComment>;
  handleClickOpen: () => void;
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<Partial<CreateBoardCommentInput>>;
  boardId: string;
}
