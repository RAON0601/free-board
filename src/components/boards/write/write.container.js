import BoardWriteUI from "./write.presenter";
import { CREATE_BOARD } from "./write.queries";
import { useMutation } from "@apollo/client";
import { useForm, useWatch } from "react-hook-form";
import { makeObjectFrom } from "@/utils";

export default function BoardWrite({ routeBoardDetail }) {
  const [createBoardAPI] = useMutation(CREATE_BOARD);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validateFieldNames = ["writer", "password", "title", "contents"];
  const validateFields = watch(validateFieldNames);

  /**
   *  컴포넌트의 값을 옵저버로 관찰하는 함수
   *  useFormContext를 이용하면 최적화 할 수 있을거 같긴한데..
   */
  const validateInput = () => {
    const { writer, password, title, contents } = makeObjectFrom(
      validateFieldNames,
      validateFields
    );
    return writer && password && title && contents ? true : false;
  };

  const onSubmit = handleSubmit(async (data) => {
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
      routeBoardDetail(createdId);
    } catch (error) {
      alert(error.message);
    }
  });

  return <BoardWriteUI {...{ onSubmit, register, errors, validateInput }} />;
}
