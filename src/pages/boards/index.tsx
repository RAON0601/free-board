import React from 'react';
import BoardList from '../../components/boards/list/list.container';
import { useRouter } from 'next/router';

export default function BoardListPage() {
  const router = useRouter();
  const routingDetail = async (id: string) => {
    await router.push(`/boards/${id}/detail`);
  };

  return <BoardList routingDetail={routingDetail} />;
}
