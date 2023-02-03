import BoardEditUI from "./edit.presenter";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { makeObjectFrom, validateObjectValue } from "@/commons/utils";
import { FETCH_BOARD, UPDATE_BOARD } from "../board.queries";
import { BoardEditProps, updateBoardRequest } from "./edit.types";

/**
 * graph ql 관련 tpye 지정 나중에 하기
 */
export default function BoardEdit({ id, routeBoardDetail }: BoardEditProps) {
  const [updateBoardAPI] = useMutation(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  const [isEdit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      contents: "",
      password: "",
    },
    values: data?.fetchBoard,
  });

  const validateFieldNames = ["title", "contents", "password"];
  const validateFields = watch(validateFieldNames);

  const validateInput = () =>
    validateObjectValue(makeObjectFrom(validateFieldNames, validateFields));

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { password, title, contents } = data;
      const myVariables: updateBoardRequest = { boardId: id };
      if (password) myVariables.password = password;
      if (title) myVariables.title = title;
      if (contents) myVariables.contents = contents;

      const res = await updateBoardAPI({
        variables: myVariables,
      });

      const updateId = res.data.updateBoard._id;
      alert("게시글 수정이 완료 되었습니다!");
      routeBoardDetail(updateId);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  });

  useEffect(() => setEdit(true), []);

  return (
    <BoardEditUI
      {...{
        onSubmit,
        register,
        errors,
        validateInput,
        isEdit,
        board: data?.fetchBoard,
      }}
    />
  );
}
