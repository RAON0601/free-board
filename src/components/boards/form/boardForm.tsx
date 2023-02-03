import { Form, FormName } from "@/components/commons/form/form.style";
import {
  Input,
  InputField,
  InputFieldMid,
  InputFieldSmall,
  TextArea,
  InputError,
  Label,
  Radio,
} from "@/components/commons/form/input.style";
import {
  ButtonBlack,
  CreateBoardButton,
} from "@/components/commons/button.style";
import { GrayBox } from "@/components/boards/write/write.style";
import { Row } from "@/components/commons/row.style";
import { BoardFormProps } from "./boardForm.types";

export default function BoardForm({
  onSubmit,
  register,
  errors,
  validateInput,
  isEdit,
  board,
}: BoardFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <FormName>게시글 {isEdit ? "수정" : "등록"}</FormName>
      <Row style={{ justifyContent: "space-between" }}>
        <InputFieldMid>
          <Label>작성자</Label>
          <Input
            placeholder="이름을 적어주세요"
            {...register("writer", {
              required: "작성자는 필수 입력값 입니다.",
            })}
            defaultValue={board?.writer || ""}
          />
          {errors.writer && (
            <InputError>{`${errors.writer.message}`}</InputError>
          )}
        </InputFieldMid>

        <InputFieldMid>
          <Label>비밀번호</Label>
          <Input
            placeholder="비밀번호를 입력해주세요"
            {...register("password", {
              required: "비밀번호는 필수 입력값 입니다.",
            })}
          />
          {errors.password && (
            <InputError>{`${errors.password.message}`}</InputError>
          )}
        </InputFieldMid>
      </Row>

      <Row>
        <InputField>
          <Label>제목</Label>
          <Input
            placeholder="제목을 작성해주세요"
            {...register("title", { required: "제목은 필수 입력값 입니다." })}
            defaultValue={board?.title}
          />
          {errors.title && <InputError>{`${errors.title.message}`}</InputError>}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>내용</Label>
          <TextArea
            {...register("contents", {
              required: "내용은 필수 입력값 입니다.",
            })}
            defaultValue={board?.contents}
          />
          {errors.contents && (
            <InputError>{`${errors.contents.message}`}</InputError>
          )}
        </InputField>
      </Row>

      <Row>
        <Label>주소</Label>
      </Row>

      <Row style={{ justifyContent: "start", alignItems: "center" }}>
        <InputFieldSmall style={{ marginRight: "16px" }}>
          <Input placeholder="07250" {...register("address1")} />
          {errors.address1 && (
            <InputError>{`${errors.address1.message}`}</InputError>
          )}
        </InputFieldSmall>
        <ButtonBlack>우편번호 검색</ButtonBlack>
      </Row>

      <Row>
        <InputField>
          <Input {...register("address2")} />
          {errors.address2 && (
            <InputError>{`${errors.address2.message}`}</InputError>
          )}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Input {...register("address3")} />
          {errors.address3 && (
            <InputError>{`${errors.address3.message}`}</InputError>
          )}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>유튜브</Label>
          <Input
            placeholder="링크를 복사해주세요"
            {...register("youtubeLink")}
          />
          {errors.youtubeLink && (
            <InputError>{`${errors.youtubeLink.message}`}</InputError>
          )}
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
        <Radio type="radio" value="유튜브" {...register("category")} />
        <Label style={{ marginBottom: 0, marginRight: "16px" }}>유튜브</Label>
        <Radio type="radio" {...register("category")} />
        <Label style={{ marginBottom: 0 }}>사진</Label>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "48px" }}>
        <CreateBoardButton
          type="submit"
          backgroundColor={validateInput() ? "#ffd600" : "gray"}
        >
          {isEdit ? "수정" : "등록"}하기
        </CreateBoardButton>
      </Row>
    </Form>
  );
}
