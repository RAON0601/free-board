import type { Board } from '@/commons/types/types';
import type { BaseSyntheticEvent } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface BoardEditInput {
  title: string;
  password: string;
  contents: string;
}

export type BoardEditValidateFields = Array<'title' | 'contents' | 'password'>;

export interface BoardEditProps {
  id: string;
  routeBoardDetail: (id: string) => void;
}

export interface BoardEditUIProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  validateInput: () => boolean;
  isEdit: boolean;
  board?: Board;
}

export interface updateBoardRequest {
  boardId: string;
  password?: string;
  title?: string;
  contents?: string;
}
