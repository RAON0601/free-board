import { BoardListContainer, BoardTable, SearchBar } from './list.style';
import type { BoardListUIProps } from './list.type';

export default function BoardListUI({ boardList, routingDetail }: BoardListUIProps) {
  return (
    <BoardListContainer>
      <SearchBar />

      <BoardTable {...{ boardList, routingDetail }} />
    </BoardListContainer>
  );
}
