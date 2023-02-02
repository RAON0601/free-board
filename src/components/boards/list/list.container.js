import { useQuery } from "@apollo/client";
import BoardListUI from "./list.presenter";
import { FETCH_BOARDS } from "./list.queries";

export default function BoardList() {
  // const { boardList } = useQuery(FETCH_BOARDS);
  // console.log(boardList);
  return <BoardListUI />;
}
