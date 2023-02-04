import { type Query } from '@/commons/types/types';
import { type BoardInputType } from './boardForm.types';
import { useForm } from 'react-hook-form';

export const useEditBoardForm = (data?: Pick<Query, 'fetchBoard'>) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BoardInputType>({
    defaultValues: {
      title: '',
      contents: '',
      password: '',
    },
    values: {
      title: data?.fetchBoard.title ?? '',
      password: '',
      contents: data?.fetchBoard.contents ?? '',
    },
  });

  return { register, handleSubmit, watch, errors };
};

export const useWriteBoardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BoardInputType>();

  return { register, handleSubmit, watch, errors };
};
