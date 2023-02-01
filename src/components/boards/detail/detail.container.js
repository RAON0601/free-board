import BoardDetailUI from "./detail.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./detail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  return <BoardDetailUI {...data?.fetchBoard} />;
}
