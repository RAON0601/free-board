import { BaseSyntheticEvent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type BoardWriteProps = {
  routeBoardDetail: (id: string) => void;
};

export type BoardWriteUIProps = {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validateInput: () => boolean;
};
