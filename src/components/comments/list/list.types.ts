import { BoardComment } from "@/commons/types/types";

export type CommentListProps = {
  boardId: string;
};

export type CommentListUIProps = {
  commentList?: Partial<BoardComment>[];
};
