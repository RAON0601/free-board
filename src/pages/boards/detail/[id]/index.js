import BoardDetail from "@/components/boards/detail/detail.container";
import { useRouter } from "next/router";

export default function BoardDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const routeBoardList = () => {
    router.push("/boards");
  };

  const routeBoardEdit = (id) => {
    router.push(`/boards/${id}/edit`);
  };

  return <BoardDetail {...{ id, routeBoardList, routeBoardEdit }} />;
}
