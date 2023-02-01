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
} from "@/styles/boards/detail";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

/* <div>상세 페이지 입니다 게시글 번호: {data?.fetchBoard._id}</div> */
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  return (
    <BoardDetail>
      <BoardHeader>
        <WriterInfoWrapper>
          <WriterProfile src="/profile.png" />
          <WriterDetail>
            <Writer>{data?.fetchBoard.writer || "김정민"}</Writer>
            <CreateBoardDate>
              Date: {data?.fetchBoard.createAt || "2023.02.01"}
            </CreateBoardDate>
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
        <Title>제목</Title>
        {/* 이미지 있고 없고 처리는 나중에 하고 */}
        <Content>{data?.fetchBoard.contents || "기본 텍스트"}</Content>
        {/* 동영상 있고 없고 처리는 나중에 하고 */}

        <RecommendWrapper>
          <Recommend>
            <RecommendImage src="/like.png" width={20} height={20} />
            <RecommendText>{data?.fetchBoard.likeCount || 0}</RecommendText>
          </Recommend>
          <Recommend>
            <RecommendImage src="/dislike.png" width={20} height={20} />
            <RecommendText>{data?.fetchBoard.likeCount || 0}</RecommendText>
          </Recommend>
        </RecommendWrapper>
      </BoardBody>
    </BoardDetail>
  );
}
