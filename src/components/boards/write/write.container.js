import BoardWriteUI from "./write.presenter";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./write.queries";
import { useMutation } from "@apollo/client";

export default function BoardWrite() {
  const router = useRouter();
  const [createBoardAPI] = useMutation(CREATE_BOARD);

  const onSubmit = async (data) => {
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
      router.push(`/boards/detail/${createdId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return <BoardWriteUI {...{ onSubmit }} />;
}
