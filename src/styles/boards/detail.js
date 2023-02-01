import styled from "@emotion/styled";

export const BoardDetail = styled.section`
  box-sizing: border-box;
  width: 50vw;
  min-width: 700px;
  margin: 0 auto;
  padding: 0 32px 32px 32px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const WriterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const WriterProfile = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const WriterDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.h5`
  font-size: 24px;
  font-weight: 500;
  color: black;
`;

export const CreateBoardDate = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const MoreMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Menu = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const MenuImage = styled.img``;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #bdbdbd;
  margin-top: 12px;
  margin-bottom: 36px;
`;

export const BoardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: start;
  margin-bottom: 50px;
`;

export const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: "Noto Sans CJK KR";
`;

export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 300px;
`;

export const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const RecommendImage = styled.img`
  margin-bottom: 4px;
`;

export const RecommendText = styled.span`
  font-size: 18px;
  color: #828282;
`;
