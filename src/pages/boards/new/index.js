import BoardWrite from "@/components/boards/write/write.container";
import { useRouter } from "next/router";

export default function BoardWritePage() {
  const router = useRouter();
  const routeDetail = (boardId) => {
    router.push(`/boards/detail/${boardId}`);
  };

  return <BoardWrite {...{ routeDetail }} />;
}
