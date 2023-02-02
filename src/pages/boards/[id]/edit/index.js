import BoardEdit from "@/components/boards/edit/edit.container";
import { useRouter } from "next/router";

export default function BoardEditPage() {
  const router = useRouter();
  const id = router.query.id;

  const routeBoardDetail = (id) => {
    router.push(`/boards/${id}/detail`);
  };

  return <BoardEdit {...{ id, routeBoardDetail }} />;
}
