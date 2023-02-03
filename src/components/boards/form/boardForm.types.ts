import { type Board } from '@/commons/types/types';
import { type BaseSyntheticEvent, type ReactNode } from 'react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

export interface BoardFormProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  validateInput: () => boolean;
  isEdit: boolean;
  board?: Board;
}

export interface FormProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  children: ReactNode;
}
