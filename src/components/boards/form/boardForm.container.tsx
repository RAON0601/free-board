import { validateObjectValue, makeObjectFrom } from '@/commons/utils';
import { useState } from 'react';
import { useEditBoardForm, useWriteBoardForm } from './boardForm.hook';
import BoardFormUI from './boardForm.presenter';
import { type BoardFormProps } from './boardForm.types';

export default function BoardForm({ onSubmitHandler, validateFieldNames, isEdit, board }: BoardFormProps) {
  const [addressModalStatus, setAddressModalStatus] = useState(false);
  const { register, handleSubmit, watch, errors } = isEdit ? useEditBoardForm(board) : useWriteBoardForm();

  const validateFields = watch(validateFieldNames);
  const validateInput = () => validateObjectValue(makeObjectFrom(validateFieldNames, validateFields));

  const toggleAddressModal = () => setAddressModalStatus(prev => !prev);

  return (
    <BoardFormUI
      {...{
        onSubmit: handleSubmit(onSubmitHandler),
        register,
        errors,
        validateInput,
        toggleAddressModal,
        addressModalStatus,
        isEdit,
      }}
    />
  );
}
