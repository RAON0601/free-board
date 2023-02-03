import { FieldErrors, UseFormRegister } from "react-hook-form";
import { BaseSyntheticEvent } from "react";

export type CommentWriteProps = {
  boardId: string;
};

export type CommentWriteUIProps = {
  register: UseFormRegister<CommentCreateInput>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  errors: FieldErrors<CommentCreateInput>;
};

export type CommentFormProps = {
  register: UseFormRegister<CommentCreateInput>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  errors: FieldErrors<CommentCreateInput>;
};

export type CommentCreateInput = {
  writer: string;
  password: string;
  contents: string;
};

export type ValidateFieldNames = ("writer" | "password" | "contents")[];
