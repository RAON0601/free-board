import React from 'react';
import { useRouter } from 'next/router';
import BoardEdit from '@/components/boards/edit/edit.container';

export default function BoardEditPage() {
  const router = useRouter();
  const id = router.query.id;

  if (!(typeof id === 'string')) {
    void router.push('/');
    return;
  }

  const routeBoardDetail = async (id: string) => {
    await router.push(`/boards/${id}/detail`);
  };

  return <BoardEdit {...{ id, routeBoardDetail }} />;
}
