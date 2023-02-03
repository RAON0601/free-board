import type { Board } from '@/commons/types/types';

export interface BoardDetailUIProps {
  board?: Board;
  deleteBoard: (id: string) => void;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
}

export interface BoardDetailProps {
  boardId: string;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
}
