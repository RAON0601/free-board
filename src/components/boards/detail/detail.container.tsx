import BoardDetailUI from "./detail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "../board.queries";
import { BoardDetailProps } from "./detail.type";

export default function BoardDetail({
  boardId,
  routeBoardList,
  routeBoardEdit,
}: BoardDetailProps) {
  const [deleteBoardAPI] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: boardId,
    },
  });

  const deleteBoard = async (_id: string) => {
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
