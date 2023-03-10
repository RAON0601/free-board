import { type BoardDetailUIProps } from './detail.type';
import { Box, Divider } from '@mui/material';
import { BoardBody, BoardHeader, Navigation } from './detail.style';
import { ErrorModal } from '../commons/error.modal';

export default function BoardDetailUI({
  board,
  deleteBoard,
  routeBoardList,
  routeBoardEdit,
  likeBoard,
  dislikeBoard,
  errorModalStatus,
  toggleErrorModal,
  errorMessage,
}: BoardDetailUIProps) {
  return (
    <>
      <ErrorModal {...{ errorModalStatus, toggleErrorModal, message: errorMessage }} />

      <Box
        sx={{
          width: '50vw',
          minWidth: '768px',
          margin: '0 auto',
          padding: '0 32px 32px 32px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <BoardHeader board={board} />

        <Divider style={{ width: '100%', margin: '16px 0 36px 0' }} />

        <BoardBody {...{ board, likeBoard, dislikeBoard }} />
      </Box>

      <Navigation {...{ board, deleteBoard, routeBoardList, routeBoardEdit }} />
    </>
  );
}
