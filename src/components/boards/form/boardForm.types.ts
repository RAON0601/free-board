import { BaseSyntheticEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type BoardFormProps = {
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
