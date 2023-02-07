import { useRouter } from 'next/router';
import BoardDetail from '@/components/boards/detail/detail.container';
import CommentList from '@/components/comments/list/list.container';

export default function BoardDetailPage() {
  const router = useRouter();
  const boardId = router.query.id as string;

  const routeBoardList = async () => {
    await router.push('/boards');
  };

  const routeBoardEdit = async (id: string) => {
    await router.push(`/boards/${id}/edit`);
  };

  return (
    <>
      <BoardDetail {...{ boardId, routeBoardList, routeBoardEdit }} />

      <CommentList {...{ boardId }} />
    </>
  );
}
