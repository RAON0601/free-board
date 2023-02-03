import { useRouter } from "next/router";
import BoardDetail from "@/components/boards/detail/detail.container";
import CommentWrite from "@/components/comments/write/write.container";
import CommentList from "@/components/comments/list/list.container";

export default function BoardDetailPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const routeBoardList = () => {
    router.push("/boards");
  };

  const routeBoardEdit = (id: string) => {
    router.push(`/boards/${id}/edit`);
  };

  return (
    <>
      <BoardDetail {...{ id, routeBoardList, routeBoardEdit }} />{" "}
      <CommentWrite />
      <CommentList />
    </>
  );
}
