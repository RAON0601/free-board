import { Board } from "@/commons/types/types";
import { BaseSyntheticEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type BoardEditInput = {
  title: string;
  password: string;
  contents: string;
};

export type BoardEditValidateFields = ("title" | "contents" | "password")[];

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
  board?: Board;
};

export type updateBoardRequest = {
  boardId: string;
  password?: string;
  title?: string;
  contents?: string;
};
