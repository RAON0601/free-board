import BoardForm from "../form/boardForm";
import { BoardWriteUIProps } from "./write.types";

export default function BoardWriteUI({
  onSubmit,
  register,
  errors,
  validateInput,
}: BoardWriteUIProps) {
  return (
    <BoardForm
      {...{ onSubmit, register, errors, validateInput, isEdit: false }}
    />
  );
}
