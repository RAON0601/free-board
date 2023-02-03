import { Board, Query } from "@/commons/types/types";

export type BoardDetailUIProps = {
  board?: Board;
  deleteBoard: (id: string) => void;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
};

export type BoardDetailProps = {
  boardId: string;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
};
