import BoardForm from "../form/boardForm";

export default function BoardEditUI({
  onSubmit,
  register,
  errors,
  validateInput,
  isEdit,
  board,
}) {
  return (
    <BoardForm
      {...{ onSubmit, register, errors, validateInput, isEdit, board }}
    />
  );
}
