import { type Board } from '@/commons/types/types';
import { type BoardInputType } from './boardForm.types';
import { useForm } from 'react-hook-form';

export const useEditBoardForm = (data?: Board) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BoardInputType>({
    defaultValues: {
      writer: '',
      title: '',
      contents: '',
      password: '',
      youtubeUrl: '',
      boardAddress: {
        address: '',
        addressDetail: '',
        zipcode: '',
      },
    },
    values: {
      writer: data?.writer,
      title: data?.title ?? '',
      password: '',
      contents: data?.contents ?? '',
      youtubeUrl: data?.youtubeUrl ?? '',
      boardAddress: data?.boardAddress,
    },
  });

  return { register, handleSubmit, watch, setValue, errors };
};

export const useWriteBoardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BoardInputType>();

  return { register, handleSubmit, watch, setValue, errors };
};
