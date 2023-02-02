import React from "react";
import { useRouter } from "next/router";
import BoardEdit from "@/components/boards/edit/edit.container";

export default function BoardEditPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const routeBoardDetail = (id: string) => {
    router.push(`/boards/${id}/detail`);
  };

  return <BoardEdit {...{ id, routeBoardDetail }} />;
}
