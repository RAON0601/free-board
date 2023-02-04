import { validateObjectValue, makeObjectFrom } from '@/commons/utils';
import { useState } from 'react';
import { type Address } from 'react-daum-postcode';
import { useEditBoardForm, useWriteBoardForm } from './boardForm.hook';
import BoardFormUI from './boardForm.presenter';
import { type BoardFormProps } from './boardForm.types';

export default function BoardForm({ onSubmitHandler, validateFieldNames, isEdit, board }: BoardFormProps) {
  const [addressModalStatus, setAddressModalStatus] = useState(false);
  const { register, handleSubmit, watch, setValue, errors } = isEdit ? useEditBoardForm(board) : useWriteBoardForm();

  const validateFields = watch(validateFieldNames);
  const validateInput = () => validateObjectValue(makeObjectFrom(validateFieldNames, validateFields));

  const toggleAddressModal = () => setAddressModalStatus(prev => !prev);

  const onAddressInput = (data: Address) => {
    const { address, zonecode } = data;
    setValue('boardAddress.zipcode', zonecode);
    setValue('boardAddress.address', address);
    toggleAddressModal();
  };

//   console.log('board', board);

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
        onAddressInput,
        board,
      }}
    />
  );
}
