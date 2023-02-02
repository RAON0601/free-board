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
  Title,
} from "./list.style";
import { BoardListUIProps } from "./list.type";

export default function BoardListUI({
  boardList,
  routingDetail,
}: BoardListUIProps) {
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
          {boardList?.map(({ _id, title, writer, createdAt }) => (
            <Tr key={_id}>
              <Td>{_id}</Td>
              <Title onClick={() => routingDetail(_id)}>{title}</Title>
              <Td>{writer}</Td>
              <Td>{createdAt}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </BoardListContainer>
  );
}
