import { type Board } from '@/commons/types/types';

export interface BoardListProps {
  routingDetail: (id: string) => void;
}

export interface BoardListUIProps {
  boardList?: Board[];
  routingDetail: (id: string) => void;
}

export interface BoardTableProps {
  boardList?: Board[];
  routingDetail: (id: string) => void;
}
