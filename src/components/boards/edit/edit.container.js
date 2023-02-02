import BoardEditUI from "./edit.presenter";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { makeObjectFrom, validateObjectValue } from "@/utils";
import { FETCH_BOARD, UPDATE_BOARD } from "../board.queries";

export default function BoardEdit({ id, routeBoardDetail }) {
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
  } = useForm();

  const validateFieldNames = ["title", "contents", "password"];
  const validateFields = watch(validateFieldNames);

  const validateInput = () =>
    validateObjectValue(makeObjectFrom(validateFieldNames, validateFields));

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { password, title, contents } = data;
      const res = await updateBoardAPI({
        variables: {
          boardId: id,
          password,
          title,
          contents,
        },
      });

      const updateId = res.data.updateBoard._id;
      alert("게시글 수정이 완료 되었습니다!");
      routeBoardDetail(updateId);
    } catch (error) {
      alert(error.message);
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
