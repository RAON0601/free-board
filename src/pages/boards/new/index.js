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
import { useForm } from "react-hook-form";

export default function NewBoardFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <NewBoardForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>게시글 등록</FormName>
      <Row>
        <InputFieldMid>
          <Label>작성자</Label>
          <Input
            placeholder="이름을 적어주세요"
            aria-invalid={errors.author ? "true" : "false"}
            {...register("author", {
              required: "작성자는 필수 입력값 입니다.",
            })}
          />
          {errors.author && <InputError>{errors.author.message}</InputError>}
        </InputFieldMid>

        <InputFieldMid>
          <Label>비밀번호</Label>
          <Input
            placeholder="비밀번호를 입력해주세요"
            {...register("pwd", { required: "비밀번호는 필수 입력값 입니다." })}
          />
          {errors.pwd && <InputError>{errors.pwd.message}</InputError>}
        </InputFieldMid>
      </Row>

      <Row>
        <InputField>
          <Label>제목</Label>
          <Input
            placeholder="제목을 작성해주세요"
            {...register("title", { required: "제목은 필수 입력값 입니다." })}
          />
          {errors.title && <InputError>{errors.title.message}</InputError>}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>내용</Label>
          <TextArea
            {...register("content", { required: "내용은 필수 입력값 입니다." })}
          />
          {errors.content && <InputError>{errors.content.message}</InputError>}
        </InputField>
      </Row>

      <Row>
        <Label>주소</Label>
      </Row>

      <Row style={{ justifyContent: "start", alignItems: "center" }}>
        <InputFieldSmall style={{ marginRight: "16px" }}>
          <Input
            placeholder="07250"
            {...register("address1", {
              required: "주소는 필수 입력값 입니다.",
            })}
          />
          {errors.address1 && (
            <InputError>{errors.address1.message}</InputError>
          )}
        </InputFieldSmall>
        <ButtonBlack>우편번호 검색</ButtonBlack>
      </Row>

      <Row>
        <InputField>
          <Input
            {...register("address2", {
              required: "주소는 필수 입력값 입니다.",
            })}
          />
          {errors.address2 && (
            <InputError>{errors.address2.message}</InputError>
          )}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Input
            {...register("address3", {
              required: "주소는 필수 입력값 입니다.",
            })}
          />
          {errors.address3 && (
            <InputError>{errors.address3.message}</InputError>
          )}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Label>유튜브</Label>
          <Input
            placeholder="링크를 복사해주세요"
            {...register("youtubeLink", {
              required: "유튜브 링크는 필수 입력값 입니다.",
            })}
          />
          {errors.youtubeLink && (
            <InputError>{errors.youtubeLink.message}</InputError>
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
        <Radio
          type="radio"
          name="category"
          value="유튜브"
          {...register("categorty", { required: "종류는 필수 입력값 입니다!" })}
        />
        <Label style={{ marginBottom: 0, marginRight: "16px" }}>유튜브</Label>
        <Radio
          type="radio"
          name="category"
          {...register("categorty", { required: "종류는 필수 입력값 입니다!" })}
        />
        <Label style={{ marginBottom: 0 }}>사진</Label>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "48px" }}>
        <ButtonYellow type="submit">등록하기</ButtonYellow>
      </Row>
    </NewBoardForm>
  );
}
