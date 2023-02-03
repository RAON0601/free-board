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
  ButtonWrapper,
  Button,
} from "./detail.style";
import { BoardDetailUIProps } from "./detail.type";

export default function BoardDetailUI({
  fetchBoard,
  deleteBoard,
  routeBoardList,
  routeBoardEdit,
}: BoardDetailUIProps) {
  return (
    <>
      <BoardDetail>
        <BoardHeader>
          <WriterInfoWrapper>
            <WriterProfile src="/profile.png" />
            <WriterDetail>
              <Writer>{fetchBoard?.writer}</Writer>
              <CreateBoardDate>{`Date: ${fetchBoard?.createdAt}`}</CreateBoardDate>
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
          <Title>{fetchBoard?.title || "제목"}</Title>
          {/* 이미지 있고 없고 처리는 나중에 하고 */}
          <Content>{fetchBoard?.contents || "기본 텍스트"}</Content>
          {/* 동영상 있고 없고 처리는 나중에 하고 */}

          <RecommendWrapper>
            <Recommend>
              <RecommendImage src="/like.png" width={20} height={20} />
              <RecommendText>{fetchBoard?.likeCount || 0}</RecommendText>
            </Recommend>
            <Recommend>
              <RecommendImage src="/dislike.png" width={20} height={20} />
              <RecommendText>{fetchBoard?.dislikeCount || 0}</RecommendText>
            </Recommend>
          </RecommendWrapper>
        </BoardBody>
      </BoardDetail>
      <ButtonWrapper>
        <Button onClick={routeBoardList}>목록으로</Button>
        <Button onClick={() => routeBoardEdit(fetchBoard?._id || "")}>
          수정하기
        </Button>
        <Button onClick={() => deleteBoard(fetchBoard?._id || "")}>
          삭제하기
        </Button>
      </ButtonWrapper>
    </>
  );
}
