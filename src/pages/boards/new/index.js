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
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String
    $title: String!
    $contents: String!
    $password: String!
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        title: $title
        contents: $contents
        password: $password
      }
    ) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function NewBoardFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [createBoardAPI] = useMutation(CREATE_BOARD);

  const onSubmit = async (data) => {
    try {
      const { writer, password, title, contents } = data;
      const res = await createBoardAPI({
        variables: {
          writer,
          password,
          title,
          contents,
        },
      });

      const createdId = res.data.createBoard._id;
      alert("게시글 등록이 완료 되었습니다!");
      router.push(`/boards/detail/${createdId}`);
    } catch (error) {
      alert(error.message);
    }
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
            {...register("writer", {
              required: "작성자는 필수 입력값 입니다.",
            })}
          />
          {errors.writer && <InputError>{errors.writer.message}</InputError>}
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
            <InputError>{errors.password.message}</InputError>
          )}
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
            {...register("contents", {
              required: "내용은 필수 입력값 입니다.",
            })}
          />
          {errors.contents && (
            <InputError>{errors.contents.message}</InputError>
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
            <InputError>{errors.address1.message}</InputError>
          )}
        </InputFieldSmall>
        <ButtonBlack>우편번호 검색</ButtonBlack>
      </Row>

      <Row>
        <InputField>
          <Input {...register("address2")} />
          {errors.address2 && (
            <InputError>{errors.address2.message}</InputError>
          )}
        </InputField>
      </Row>

      <Row>
        <InputField>
          <Input {...register("address3")} />
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
            {...register("youtubeLink")}
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
          {...register("categorty")}
        />
        <Label style={{ marginBottom: 0, marginRight: "16px" }}>유튜브</Label>
        <Radio type="radio" name="category" {...register("categorty")} />
        <Label style={{ marginBottom: 0 }}>사진</Label>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "48px" }}>
        <ButtonYellow type="submit">등록하기</ButtonYellow>
      </Row>
    </NewBoardForm>
  );
}
