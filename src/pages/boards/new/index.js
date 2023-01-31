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
  InputError,
} from "@/styles/boards/new";
import { useState } from "react";

export default function NewBoardFormPage() {
  const [author, setAuthor] = useState("");
  const [pwd, setPwd] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [category, setCategory] = useState("사진");

  const [authorError, setAuthorError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [address2Error, setAddress2Error] = useState("");
  const [address3Error, setAddress3Error] = useState("");
  const [youtubeLinkError, setYoutubeLinkError] = useState("");

  const onAuthorChange = (e) => setAuthor(e.target.value);
  const onPwdChange = (e) => setPwd(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAddress1Change = (e) => setAddress1(e.target.value);
  const onAddress2Change = (e) => setAddress2(e.target.value);
  const onAddress3Change = (e) => setAddress3(e.target.value);
  const onYoutubeLinkChange = (e) => setYoutubeLink(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (author.length <= 0) {
      setAuthorError("작성자는 비어 있을 수 없습니다.");
    } else {
      setAuthorError("");
    }

    if (pwd.length <= 0) {
      setPwdError("비밀번호는 비어 있을 수 없습니다.");
    } else {
      setPwdError("");
    }

    if (title.length <= 0) {
      setTitleError("제목은 비어 있을 수 없습니다.");
    } else {
      setTitleError("");
    }

    if (content.length <= 0) {
      setContentError("내용은 비어 있을 수 없습니다.");
    } else {
      setContentError("");
    }

    if (address1.length <= 0) {
      setAddress1Error("주소는 비어 있을 수 없습니다.");
    } else {
      setAddress1Error("");
    }

    if (address2.length <= 0) {
      setAddress2Error("주소는 비어 있을 수 없습니다.");
    } else {
      setAddress2Error("");
    }

    if (address3.length <= 0) {
      setAddress3Error("주소는 비어 있을 수 없습니다.");
    } else {
      setAddress3Error("");
    }

    if (youtubeLink.length <= 0) {
      setYoutubeLinkError("링크는 비어 있을 수 없습니다.");
    } else {
      setYoutubeLinkError("");
    }
  };

  return (
    <NewBoardForm onSubmit={onSubmit}>
      <FormName>게시글 등록</FormName>
      <Row>
        <InputFieldMid>
          <Label>작성자</Label>
          <Input
            placeholder="이름을 적어주세요"
            onChange={onAuthorChange}
            value={author}
          />
          {authorError && <InputError>{authorError}</InputError>}
        </InputFieldMid>

        <InputFieldMid>
          <Label>비밀번호</Label>
          <Input
            placeholder="비밀번호를 입력해주세요"
            onChange={onPwdChange}
            value={pwd}
          />
          {pwdError && <InputError>{pwdError}</InputError>}
        </InputFieldMid>
      </Row>

      <Row>
        <InputField>
          <Label>제목</Label>
          <Input
            placeholder="제목을 작성해주세요"
            onChange={onTitleChange}
            value={title}
          />
          {titleError && <InputError>{titleError}</InputError>}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>내용</Label>
          <TextArea onChange={onContentChange} value={content} />
          {contentError && <InputError>{contentError}</InputError>}
        </InputField>
      </Row>

      <Row>
        <Label>주소</Label>
      </Row>

      <Row style={{ justifyContent: "start", alignItems: "center" }}>
        <InputFieldSmall style={{ marginRight: "16px" }}>
          <Input
            placeholder="07250"
            onChange={onAddress1Change}
            value={address1}
          />
          {address1Error && <InputError>{address1Error}</InputError>}
        </InputFieldSmall>
        <ButtonBlack>우편번호 검색</ButtonBlack>
      </Row>

      <Row>
        <InputField>
          <Input onChange={onAddress2Change} value={address2} />
          {address2Error && <InputError>{address2Error}</InputError>}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Input onChange={onAddress3Change} value={address3} />
          {address3Error && <InputError>{address3Error}</InputError>}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>유튜브</Label>
          <Input
            placeholder="링크를 복사해주세요"
            onChange={onYoutubeLinkChange}
            value={youtubeLink}
          />
          {youtubeLinkError && <InputError>{youtubeLinkError}</InputError>}
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
        <Radio type="radio" name="category" value="유튜브" />
        <Label style={{ marginBottom: 0, marginRight: "16px" }}>유튜브</Label>
        <Radio
          type="radio"
          name="category"
          onClick={(e) => console.log(e.target.value)}
          value="사진"
          defaultChecked
        />
        <Label style={{ marginBottom: 0 }}>사진</Label>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "48px" }}>
        <ButtonYellow type="submit">등록하기</ButtonYellow>
      </Row>
    </NewBoardForm>
  );
}
