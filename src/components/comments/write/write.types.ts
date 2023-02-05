import { type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { type BaseSyntheticEvent } from 'react';
import { type CreateBoardCommentInput } from '@/commons/types/types';

export interface CommentWriteProps {
  boardId: string;
}

export interface CommentFormProps {
  register: UseFormRegister<Partial<CreateBoardCommentInput>>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  errors: FieldErrors<Partial<CreateBoardCommentInput>>;
  rating: number | null;
  onRatingChange: (number: number | null) => void;
}

export interface CommentCreateInput {
  writer: string;
  password: string;
  contents: string;
}

export type ValidateFieldNames = Array<'writer' | 'password' | 'contents'>;
