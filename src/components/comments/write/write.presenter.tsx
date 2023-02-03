import CommentForm from "../form/form";
import { CommentWriteUIProps } from "./write.types";

export default function CommentWriteUI({
  register,
  onSubmit,
  errors,
}: CommentWriteUIProps) {
  return <CommentForm {...{ register, onSubmit, errors }} />;
}
