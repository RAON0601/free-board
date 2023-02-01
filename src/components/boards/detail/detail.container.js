import BoardDetailUI from "./detail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./detail.queries";

export default function BoardDetail({ id }) {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  return <BoardDetailUI {...data?.fetchBoard} />;
}
