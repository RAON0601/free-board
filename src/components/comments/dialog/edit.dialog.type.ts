import { type CreateBoardCommentInput } from '@/commons/types/types';
import { type BaseSyntheticEvent } from 'react';
import { type UseFormRegister } from 'react-hook-form';

export interface CommentEditDialogProps {
  open: boolean;
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<Partial<CreateBoardCommentInput>>;
}
