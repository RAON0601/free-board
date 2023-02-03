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

export interface BoardHeadProps {
  board?: Board;
}

export interface BoardBodyProps {
  board?: Board;
}

export interface NavigationProps {
  board?: Board;
  deleteBoard: (id: string) => void;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
}
