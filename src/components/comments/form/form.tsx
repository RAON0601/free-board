import { ButtonWrapper, Form, SubmitButton, TextArea } from "./form.style";

export default function CommentForm() {
  return (
    <Form>
      <span style={{ marginBottom: "20px", marginTop: "20px" }}>별 5개</span>
      <TextArea />
      <ButtonWrapper>
        <span>0/100</span>
        <SubmitButton color="black">등록하기</SubmitButton>
      </ButtonWrapper>
    </Form>
  );
}
