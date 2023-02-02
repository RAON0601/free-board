import BoardWrite from "@/components/boards/write/write.container";
import { useRouter } from "next/router";

export default function BoardWritePage() {
  const router = useRouter();

  const routeBoardDetail = (id: string) => {
    router.push(`/boards/${id}/detail`);
  };

  return <BoardWrite {...{ routeBoardDetail }} />;
}
