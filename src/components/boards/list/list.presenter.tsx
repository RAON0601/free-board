import { BoardListContainer, BoardPagination, BoardTable, SearchBar } from './list.style';
import type { BoardListUIProps } from './list.type';

export default function BoardListUI({
  boardList,
  boardCount,
  routingDetail,
  curPage,
  onCurPageChange,
}: BoardListUIProps) {
  return (
    <BoardListContainer>
      <SearchBar />

      <BoardTable {...{ boardList, routingDetail }} />

      <BoardPagination {...{ curPage, onCurPageChange, boardCount }} />
    </BoardListContainer>
  );
}
