import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Header() {
  return (
    <Box>
      <AppBar position="static" color="yellow">
        <Toolbar sx={{ width: '80vw', margin: '0 auto' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KJM
          </Typography>
          <Button color="inherit" sx={{ fontWeight: 600 }}>
            로그인
          </Button>
          <Button color="inherit" sx={{ fontWeight: 600 }}>
            회원 가입
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
