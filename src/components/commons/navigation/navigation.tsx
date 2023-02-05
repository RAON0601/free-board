import { Divider, Typography } from '@mui/material';
import { NavigationContainer } from './navigation.style';

export default function Navigation() {
  return (
    <NavigationContainer
      direction="row"
      justifyContent="center"
      spacing={4}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Typography>자유게시판</Typography>
      <Typography>e-commerce</Typography>
    </NavigationContainer>
  );
}
