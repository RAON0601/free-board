import { type Query } from '@/commons/types/types';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { FETCH_BOARDS } from '../board.queries';
import BoardListUI from './list.presenter';
import { type BoardListProps } from './list.type';

export default function BoardList({ routingDetail }: BoardListProps) {
  const [curPage, setCurPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data } = useQuery<Pick<Query, 'fetchBoards'> & Pick<Query, 'fetchBoardsCount'>>(FETCH_BOARDS, {
    variables: {
      page: curPage,
      search,
    },
  });

  const onCurPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurPage(page);
  };

  const onSearch = (search: string) => {
    setSearch(search);
    setCurPage(1);
  };

  return (
    <BoardListUI
      {...{
        boardList: data?.fetchBoards,
        boardCount: data?.fetchBoardsCount,
        curPage,
        onCurPageChange,
        routingDetail,
        onSearch,
      }}
    />
  );
}
