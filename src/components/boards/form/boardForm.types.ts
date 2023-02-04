import { type Query, type Board } from '@/commons/types/types';
import { type BaseSyntheticEvent, type ReactNode } from 'react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

export interface BoardFormUIProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  validateInput: () => boolean;
  toggleAddressModal: () => void;
  addressModalStatus: boolean;
  isEdit: boolean;
  board?: Board;
}

export interface BoardFormProps {
  onSubmitHandler: (data: BoardInputType) => void;
  validateFieldNames: Array<'contents' | 'writer' | 'password' | 'title'>;
  isEdit: boolean;
  board?: Pick<Query, 'fetchBoard'>;
}

export interface FormProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  children: ReactNode;
}

export type BoardInputType = Partial<Board> & { password?: string };
