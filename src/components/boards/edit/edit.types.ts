import type { Board, UpdateBoardInput } from '@/commons/types/types';
import type { BaseSyntheticEvent } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

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

export type UpdateBoardRequest = Partial<UpdateBoardInput> & { password?: string; boardId: string };
