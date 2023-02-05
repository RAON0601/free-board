import { type Board } from '@/commons/types/types';

export interface BoardListProps {
  routingDetail: (id: string) => void;
}

export interface BoardListUIProps {
  boardList?: Board[];
  boardCount?: number;
  curPage: number;
  onCurPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  routingDetail: (id: string) => void;
}

export interface BoardTableProps {
  boardList?: Board[];
  routingDetail: (id: string) => void;
}

export interface BoardPaginationProps {
  boardCount?: number;
  curPage: number;
  onCurPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
