import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "../board.queries";
import BoardListUI from "./list.presenter";

export default function BoardList({ routingDetail }) {
  const { data } = useQuery(FETCH_BOARDS);

  return <BoardListUI {...{ boardList: data?.fetchBoards, routingDetail }} />;
}
