import BoardDetailUI from "./detail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "../board.queries";

export default function BoardDetail({ id, routeBoardList, routeBoardEdit }) {
  const [deleteBoardAPI] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  const deleteBoard = async (_id) => {
    try {
      if (confirm("게시글을 삭제 하시겠습니까?")) {
        await deleteBoardAPI({
          variables: {
            boardId: _id,
          },
        });
        routeBoardList();
      }
    } catch (error) {
      alert("게시글 삭제중 에러가 발생했습니다!");
    }
  };

  return (
    <BoardDetailUI
      {...{ ...data?.fetchBoard, deleteBoard, routeBoardList, routeBoardEdit }}
    />
  );
}
