import styled from '@emotion/styled';
import { type BoardPaginationProps, type BoardTableProps } from './list.type';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

import { formatYYYYMMDD } from '@/commons/utils';
import { Button, IconButton, InputBase, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const BoardListContainer = styled.section`
  box-sizing: border-box;
  width: 50vw;
  min-width: 768px;
  margin: 0 auto;
  padding: 0 32px 32px 32px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBar = ({ onSearch }: { onSearch: (search: string) => void }) => {
  const [search, setSearch] = useState('');

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={{ width: '100%', marginBottom: '40px', marginTop: '20px', height: '40px' }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          backgroundColor: 'lightgray',
        }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="제목을 검색 해주세요"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Paper>

      <Button color="black" variant="contained" sx={{ minWidth: '90px' }} onClick={() => onSearch(search)}>
        검색하기
      </Button>
    </Stack>
  );
};

export const BoardTable = ({ boardList, routingDetail }: BoardTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, borderTop: '1px solid black', borderBottom: '1px solid black' }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              번호
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              제목
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              작성자
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              날짜
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {boardList?.map(({ _id, title, writer, createdAt }) => (
            <TableRow key={_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {_id}
              </TableCell>

              <TableCell
                align="center"
                onClick={() => routingDetail(_id)}
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                {title}
              </TableCell>

              <TableCell align="center">{writer}</TableCell>

              <TableCell align="center">{formatYYYYMMDD(createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const BoardPagination = ({ curPage, onCurPageChange, boardCount }: BoardPaginationProps) => {
  const router = useRouter();
  const onClick = () => {
    void router.push('/boards/new');
  };

  return (
    <Stack direction="row" justifyContent="center" sx={{ marginTop: '16px', position: 'relative', width: '100%' }}>
      <Pagination count={Math.ceil((boardCount ?? 10) / 10)} page={curPage} onChange={onCurPageChange} />
      <Button onClick={onClick} sx={{ position: 'absolute', right: '0' }} variant="contained" color="black">
        글 작성하기
      </Button>
    </Stack>
  );
};
