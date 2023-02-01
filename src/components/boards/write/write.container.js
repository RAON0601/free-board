import BoardWriteUI from "./write.presenter";
import { CREATE_BOARD } from "./write.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

export default function BoardWrite({ routeBoardDetail }) {
  const [createBoardAPI] = useMutation(CREATE_BOARD);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validateInput = () => {
    const boardInput = watch(["writer", "password", "title", "contents"]);
    const { writer, password, title, contents } = boardInput;
    return writer && password && title && contents ? true : false;
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { writer, password, title, contents } = data;
      const res = await createBoardAPI({
        variables: {
          writer,
          password,
          title,
          contents,
        },
      });

      const createdId = res.data.createBoard._id;
      alert("게시글 등록이 완료 되었습니다!");
      routeBoardDetail(createdId);
    } catch (error) {
      alert(error.message);
    }
  });

  return <BoardWriteUI {...{ onSubmit, register, errors, validateInput }} />;
}
