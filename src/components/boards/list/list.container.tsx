import { Query } from '@/commons/types/types';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from '../board.queries';
import BoardListUI from './list.presenter';
import { BoardListProps } from './list.type';

export default function BoardList({ routingDetail }: BoardListProps) {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>>(FETCH_BOARDS);

  return <BoardListUI {...{ boardList: data?.fetchBoards, routingDetail }} />;
}
