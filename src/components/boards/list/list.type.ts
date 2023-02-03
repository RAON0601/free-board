import { Board } from '@/commons/types/types';

export type BoardListProps = {
  routingDetail: (id: string) => void;
};

export type BoardListUIProps = {
  boardList?: Board[];
  routingDetail: (id: string) => void;
};
