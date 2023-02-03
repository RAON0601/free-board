import styled from "@emotion/styled";

export const CommentContainer = styled.ol`
  width: 50vw;
  min-width: 768px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 0 auto;
`;

export const CommentItem = styled.li`
  list-style: none;
  padding-bottom: 15px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

export const Writer = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Content = styled.p`
  color: #4f4f4f;
  margin-bottom: 16px;
`;

export const CreatedAt = styled.span`
  font-size: 12px;
  color: #bdbdbd;
`;
