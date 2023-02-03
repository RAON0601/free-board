import { type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { type BaseSyntheticEvent } from 'react';

export interface CommentWriteProps {
  boardId: string;
}

export interface CommentWriteUIProps {
  register: UseFormRegister<CommentCreateInput>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  errors: FieldErrors<CommentCreateInput>;
}

export interface CommentFormProps {
  register: UseFormRegister<CommentCreateInput>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  errors: FieldErrors<CommentCreateInput>;
}

export interface CommentCreateInput {
  writer: string;
  password: string;
  contents: string;
}

export type ValidateFieldNames = Array<'writer' | 'password' | 'contents'>;
