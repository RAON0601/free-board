import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Header() {
  return (
    <Box sx={{ marginBottom: '24px' }}>
      <AppBar position="static" color="yellow">
        <Toolbar sx={{ width: '80vw', margin: '0 auto' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KJM 자유게시판
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
