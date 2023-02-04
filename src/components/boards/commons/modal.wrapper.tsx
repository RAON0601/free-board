import { Box } from '@mui/material';

export const ModalContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

  return <Box sx={style}>{children}</Box>;
};
