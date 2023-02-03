import BoardForm from '../form/boardForm';
import type { BoardEditUIProps } from './edit.types';

export default function BoardEditUI({ onSubmit, register, errors, validateInput, isEdit, board }: BoardEditUIProps) {
  return <BoardForm {...{ onSubmit, register, errors, validateInput, isEdit, board }} />;
}
