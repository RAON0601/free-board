import BoardWriteUI from "./write.presenter";
import { CREATE_BOARD } from "./write.queries";
import { useMutation } from "@apollo/client";

export default function BoardWrite({ routeDetail }) {
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
      routeDetail(createdId);
    } catch (error) {
      alert(error.message);
    }
  };

  return <BoardWriteUI {...{ onSubmit }} />;
}
