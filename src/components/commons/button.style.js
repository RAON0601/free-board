import styled from "@emotion/styled";

export const ButtonBlack = styled.button`
  background-color: black;
  color: white;
  padding: 4px 8px;
  height: 52px;
  cursor: pointer;
`;

export const ButtonYellow = styled.button`
  background-color: #ffd600;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 60px;
  border: none;
  cursor: pointer;
`;

export const CreateBoardButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ffd600"};
  font-size: 16px;
  font-weight: 600;
  padding: 14px 60px;
  border: none;
  cursor: pointer;
`;
