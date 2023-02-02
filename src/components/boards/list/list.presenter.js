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
          <Th>번호</Th>
          <Th>제목</Th>
          <Th>작성자</Th>
          <Th>날짜</Th>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>제목1</Td>
            <Td>작성자1</Td>
            <Td>날짜1</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>제목1</Td>
            <Td>작성자1작성자1작성자1작성자1</Td>
            <Td>날짜1</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>제목1</Td>
            <Td>작성자1작성자1작성자1작성자1</Td>
            <Td>날짜1</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>제목1</Td>
            <Td>작성자1작성자1작성자1작성자1</Td>
            <Td>날짜1</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>제목1</Td>
            <Td>작성자1작성자1작성자1작성자1</Td>
            <Td>날짜1</Td>
          </Tr>
        </Tbody>
      </Table>
    </BoardListContainer>
  );
}
