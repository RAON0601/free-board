import { useQuery } from "@apollo/client";
import BoardListUI from "./list.presenter";
import { FETCH_BOARDS } from "./list.queries";

export default function BoardList({ routingDetail }) {
  const { data } = useQuery(FETCH_BOARDS);

  return <BoardListUI {...{ boardList: data?.fetchBoards, routingDetail }} />;
}
