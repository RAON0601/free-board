import BoardForm from "../form/boardForm";

export default function BoardWriteUI({
  onSubmit,
  register,
  errors,
  validateInput,
}) {
  return (
    <BoardForm
      {...{ onSubmit, register, errors, validateInput, isEdit: false }}
    />
  );
}
