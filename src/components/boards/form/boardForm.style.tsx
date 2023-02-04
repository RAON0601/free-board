import { styled } from '@mui/material/styles';
import Button, { type ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/material';
import { type FormProps } from './boardForm.types';
import TextField from '@mui/material/TextField';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';

export const PostButton = styled(Button)<ButtonProps>`
  height: 52px;
`;

export const SubmitButton = styled(Button)<ButtonProps>`
  font-size: 16px;
  font-weight: 600;
  padding: 14px 60px;
`;

export const ImageUploadButton = styled(IconButton)<IconButtonProps | { component: string }>`
  width: 100px;
  height: 100px;
  border-radius: 0;
  background-color: lightgray;
  color: black;
  margin-right: 8px;
`;

export const YellowTextField = styled(TextField)`
  .MuiInputBase-root {
    height: 100%;
  }

  & label.Mui-focused {
    color: black;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ffd600;
    }
  }
`;

export const ModalContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return <Box sx={style}>{children}</Box>;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        width: '50vw',
        minWidth: '768px',
        margin: '0 auto',
        padding: '16px 32px 32px 32px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};
