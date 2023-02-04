import { Box, Button, Stack, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

import type { BoardBodyProps, BoardHeadProps, NavigationProps } from './detail.type';
import { formatYYYYMMDD } from '@/commons/utils';

export const BoardHeader = ({ board }: BoardHeadProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '30px',
      }}
    >
      <Stack direction="row" justifyContent="flex-start">
        <AccountCircleIcon sx={{ fontSize: '60px', color: 'lightgray' }} />
        <Stack direction="column" sx={{ marginLeft: '8px' }}>
          <Typography variant="h6" fontSize={24} fontWeight={500}>
            {board?.writer}
          </Typography>

          <Typography variant="caption" fontSize={16} fontWeight={400} color="#828282">
            {`Date: ${formatYYYYMMDD(String(board?.createdAt) ?? new Date().toDateString())}`}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <LinkIcon fontSize="large" sx={{ color: '#FFD600', cursor: 'pointer' }} />

        <LocationOnIcon fontSize="large" sx={{ color: '#FFD600', cursor: 'pointer' }} />
      </Stack>
    </Box>
  );
};

export const BoardBody = ({ board, likeBoard, dislikeBoard }: BoardBodyProps) => {
  return (
    <Stack direction="column">
      <Typography variant="h2" fontSize={36} fontWeight={700} gutterBottom>
        {board?.title ?? '제목'}
      </Typography>

      {/* 이미지 있고 없고 처리는 나중에 하고 */}
      <Typography variant="h2" fontSize={16} fontWeight={400}>
        {board?.contents ?? '기본 텍스트'}
      </Typography>

      {/* 동영상 있고 없고 처리는 나중에 하고 */}

      <Stack direction="row" justifyContent="center" sx={{ marginTop: '300px' }} spacing={4}>
        <Stack direction="column" alignItems="center" onClick={likeBoard}>
          <ThumbUpIcon sx={{ color: '#FFD600', cursor: 'pointer' }} />

          <Typography variant="caption" fontSize={18} sx={{ color: '#FFD600' }}>
            {board?.likeCount ?? 0}
          </Typography>
        </Stack>

        <Stack direction="column" alignItems="center" onClick={dislikeBoard}>
          <ThumbDownOffAltIcon sx={{ color: '#bdbdbd', cursor: 'pointer' }} />

          <Typography variant="caption" fontSize={18} sx={{ color: '#bdbdbd' }}>
            {board?.dislikeCount ?? 0}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const Navigation = ({ board, routeBoardList, routeBoardEdit, deleteBoard }: NavigationProps) => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ marginTop: '60px' }} spacing={4}>
      <Button size="large" variant="outlined" color="black" onClick={routeBoardList}>
        목록으로
      </Button>
      <Button size="large" variant="outlined" color="black" onClick={() => routeBoardEdit(board?._id ?? '')}>
        수정하기
      </Button>
      <Button size="large" variant="outlined" color="black" onClick={() => deleteBoard(board?._id ?? '')}>
        삭제하기
      </Button>
    </Stack>
  );
};
