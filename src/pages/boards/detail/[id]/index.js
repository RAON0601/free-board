import BoardDetail from "@/components/boards/detail/detail.container";
import { useRouter } from "next/router";

export default function BoardDetailPage() {
  const router = useRouter();
  const routeBoardList = () => {
    router.push("/boards");
  };
  const id = router.query.id;

  return <BoardDetail {...{ id, routeBoardList }} />;
}
