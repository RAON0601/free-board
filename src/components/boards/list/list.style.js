import styled from "@emotion/styled";

export const BoardListContainer = styled.section`
  box-sizing: border-box;
  width: 50vw;
  min-width: 768px;
  margin: 0 auto;
  padding: 0 32px 32px 32px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const SearchInput = styled.input`
  width: 100%;
  min-width: 350px;
  font-size: 16px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const DateInput = styled.input`
  min-width: 240px;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  outline: none;
  margin: 0 12px;
`;

export const SearchButton = styled.button`
  background-color: black;
  min-width: 88px;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border-bottom: 1px solid #bdbdbd;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 5px 0;
`;

export const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const Td = styled.td`
  padding: 5px 0;
  text-align: center;
`;
