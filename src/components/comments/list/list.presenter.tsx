import {
  CommentContainer,
  CreatedAt,
  CommentItem,
  ItemRight,
  Writer,
  WriterBox,
  Content,
} from "./list.style";
import { CommentListUIProps } from "./list.types";

export default function CommentListUI({ commentList }: CommentListUIProps) {
  return (
    <CommentContainer>
      {commentList?.map((comment) => (
        <CommentItem>
          <span>프로필이미지</span>
          <ItemRight>
            <WriterBox>
              <Writer>{comment.writer}</Writer>
              <span style={{ marginLeft: "8px" }}>{comment.rating}</span>
            </WriterBox>
            <Content>{comment.contents}</Content>
            <CreatedAt>{comment.createdAt}</CreatedAt>
          </ItemRight>
        </CommentItem>
      ))}
    </CommentContainer>
  );
}
