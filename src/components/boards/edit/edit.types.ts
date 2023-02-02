import { BaseSyntheticEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type BoardEditProps = {
  id: string;
  routeBoardDetail: (id: string) => void;
};

export type BoardEditUIProps = {
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  validateInput: () => boolean;
  isEdit: boolean;
  board?: {
    _id: string;
    writer: string;
    title: string;
    contents: string;
    likeCount: number;
    dislikeCount: number;
    createdAt: Date;
  };
};

export type updateBoardRequest = {
  boardId: string;
  password?: string;
  title?: string;
  contents?: string;
};
