import {
  BoardHeader,
  CreateBoardDate,
  WriterDetail,
  WriterInfoWrapper,
  WriterProfile,
  BoardDetail,
  Writer,
  MoreMenu,
  MenuImage,
  Menu,
  DivideLine,
  BoardBody,
  Title,
  Content,
  RecommendWrapper,
  Recommend,
  RecommendImage,
  RecommendText,
} from "./detail.style";

export default function BoardDetailUI({
  writer,
  title,
  contents,
  likeCount,
  dislikeCount,
  createdAt,
}) {
  return (
    <BoardDetail>
      <BoardHeader>
        <WriterInfoWrapper>
          <WriterProfile src="/profile.png" />
          <WriterDetail>
            <Writer>{writer || "김정민"}</Writer>
            <CreateBoardDate>Date: {createdAt || "2023.02.01"}</CreateBoardDate>
          </WriterDetail>
        </WriterInfoWrapper>

        <MoreMenu>
          <Menu>
            <MenuImage src="/clip.png" />
          </Menu>
          <Menu>
            <MenuImage src="/map.png" />
          </Menu>
        </MoreMenu>
      </BoardHeader>

      <DivideLine />

      <BoardBody>
        <Title>{title || "제목"}</Title>
        {/* 이미지 있고 없고 처리는 나중에 하고 */}
        <Content>{contents || "기본 텍스트"}</Content>
        {/* 동영상 있고 없고 처리는 나중에 하고 */}

        <RecommendWrapper>
          <Recommend>
            <RecommendImage src="/like.png" width={20} height={20} />
            <RecommendText>{likeCount || 0}</RecommendText>
          </Recommend>
          <Recommend>
            <RecommendImage src="/dislike.png" width={20} height={20} />
            <RecommendText>{dislikeCount || 0}</RecommendText>
          </Recommend>
        </RecommendWrapper>
      </BoardBody>
    </BoardDetail>
  );
}
