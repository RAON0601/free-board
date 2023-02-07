import { type BaseSyntheticEvent, type ReactNode } from 'react';

export interface FormProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  children: ReactNode;
}
