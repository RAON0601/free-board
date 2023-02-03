import {
  CommentContainer,
  CreatedAt,
  CommentItem,
  ItemRight,
  Writer,
  WriterBox,
  Content,
} from "./list.style";

export default function CommentListUI() {
  return (
    <CommentContainer>
      <CommentItem>
        <span>프로필이미지</span>
        <ItemRight>
          <WriterBox>
            <Writer>이름</Writer>
            <span style={{ marginLeft: "8px" }}>⭐⭐⭐⭐⭐</span>
          </WriterBox>
          <Content>댓글 내용입니더</Content>
          <CreatedAt>2023-02-03</CreatedAt>
        </ItemRight>
      </CommentItem>
      <CommentItem>
        <span>프로필이미지</span>
        <ItemRight>
          <WriterBox>
            <Writer>이름</Writer>
            <span style={{ marginLeft: "8px" }}>⭐⭐⭐⭐⭐</span>
          </WriterBox>
          <Content>댓글 내용입니더</Content>
          <CreatedAt>2023-02-03</CreatedAt>
        </ItemRight>
      </CommentItem>
    </CommentContainer>
  );
}
