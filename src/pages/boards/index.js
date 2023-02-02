import BoardList from "@/components/boards/list/list.container";
import { useRouter } from "next/router";

export default function BoardListPage() {
  const router = useRouter();
  const routingDetail = (id) => {
    router.push(`/boards/detail/${id}`);
  };

  return <BoardList routingDetail={routingDetail} />;
}
