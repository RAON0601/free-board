import { useQuery } from "@apollo/client";
import { FETCH_COMMENT } from "../comments.queries";
import CommentListUI from "./list.presenter";
import { CommentListProps } from "./list.types";

export default function CommentList({ boardId }: CommentListProps) {
  const { data } = useQuery(FETCH_COMMENT, {
    variables: {
      boardId: boardId,
    },
  });

  return <CommentListUI {...{ commentList: data?.fetchBoardComments }} />;
}
