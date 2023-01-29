import {
  FormName,
  InputFieldMid,
  Input,
  Label,
  Row,
  NewBoardForm,
  InputField,
  TextArea,
  InputFieldSmall,
  ButtonBlack,
  GrayBox,
  Radio,
  ButtonYellow,
} from "@/styles/boards/new";

export default function NewBoardFormPage() {
  return (
    <NewBoardForm>
      <FormName>게시글 등록</FormName>
      <Row>
        <InputFieldMid>
          <Label>작성자</Label>
          <Input placeholder="이름을 적어주세요" />
        </InputFieldMid>

        <InputFieldMid>
          <Label>비밀번호</Label>
          <Input placeholder="비밀번호를 입력해주세요" />
        </InputFieldMid>
      </Row>

      <Row>
        <InputField>
          <Label>제목</Label>
          <Input placeholder="제목을 작성해주세요" />
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>내용</Label>
          <TextArea />
        </InputField>
      </Row>

      <Row>
        <Label>주소</Label>
      </Row>

      <Row style={{ justifyContent: "start" }}>
        <InputFieldSmall style={{ marginRight: "16px" }}>
          <Input placeholder="07250" />
        </InputFieldSmall>
        <ButtonBlack>우편번호 검색</ButtonBlack>
      </Row>

      <Row>
        <InputField>
          <Input />
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Input />
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>유튜브</Label>
          <Input placeholder="링크를 복사해주세요" />
        </InputField>
      </Row>

      <Row style={{ marginTop: "48px" }}>
        <Label>사진첨부</Label>
      </Row>

      <Row style={{ justifyContent: "flex-start" }}>
        <GrayBox />
        <GrayBox />
        <GrayBox />
      </Row>

      <Row style={{ marginTop: "48px" }}>
        <Label>메인설정</Label>
      </Row>

      <Row style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <Radio type="radio" name="category" />
        <Label style={{ marginBottom: 0, marginRight: "16px" }}>유튜브</Label>
        <Radio type="radio" name="category" />
        <Label style={{ marginBottom: 0 }}>사진</Label>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "48px" }}>
        <ButtonYellow>등록하기</ButtonYellow>
      </Row>
    </NewBoardForm>
  );
}
