import { Box } from '@mui/material';
import { type FormProps } from './form.type';

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        width: '50vw',
        minWidth: '768px',
        margin: '60px auto 0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
};
