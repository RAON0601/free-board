import {
  BoardListContainer,
  DateInput,
  SearchButton,
  SearchInput,
  SearchSection,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
} from "./list.style";

export default function BoardListUI({ boardList }) {
  return (
    <BoardListContainer>
      <SearchSection>
        <SearchInput placeholder="제목을 검색해주세요" />
        <DateInput placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <SearchButton>검색하기</SearchButton>
      </SearchSection>

      <Table>
        <Thead>
          <Tr>
            <Th>번호</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>날짜</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* 아이디, 날짜 나중에 수정 */}
          {boardList?.map((board) => (
            <Tr key={board._id}>
              <Td>{board._id}</Td>
              <Td>{board.title}</Td>
              <Td>{board.writer}</Td>
              <Td>{board.createdAt}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </BoardListContainer>
  );
}
