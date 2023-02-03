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
} from './detail.style';
import Button from '@mui/material/Button';
import { type BoardDetailUIProps } from './detail.type';

export default function BoardDetailUI({ board, deleteBoard, routeBoardList, routeBoardEdit }: BoardDetailUIProps) {
  console.log(board);
  return (
    <>
      <BoardDetail>
        <BoardHeader>
          <WriterInfoWrapper>
            <WriterProfile src="/profile.png" />
            <WriterDetail>
              <Writer>{board?.writer}</Writer>
              <CreateBoardDate>{`Date: ${String(board?.createdAt) ?? new Date().toDateString()}`}</CreateBoardDate>
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
          <Title>{board?.title ?? '제목'}</Title>
          {/* 이미지 있고 없고 처리는 나중에 하고 */}
          <Content>{board?.contents ?? '기본 텍스트'}</Content>
          {/* 동영상 있고 없고 처리는 나중에 하고 */}

          <RecommendWrapper>
            <Recommend>
              <RecommendImage src="/like.png" width={20} height={20} />
              <RecommendText>{board?.likeCount ?? 0}</RecommendText>
            </Recommend>
            <Recommend>
              <RecommendImage src="/dislike.png" width={20} height={20} />
              <RecommendText>{board?.dislikeCount ?? 0}</RecommendText>
            </Recommend>
          </RecommendWrapper>
        </BoardBody>
      </BoardDetail>
      <ButtonWrapper>
        <Button size="large" variant="outlined" onClick={routeBoardList}>
          목록으로
        </Button>
        <Button size="large" variant="outlined" onClick={() => routeBoardEdit(board?._id ?? '')}>
          수정하기
        </Button>
        <Button size="large" variant="outlined" onClick={() => deleteBoard(board?._id ?? '')}>
          삭제하기
        </Button>
      </ButtonWrapper>
    </>
  );
}
