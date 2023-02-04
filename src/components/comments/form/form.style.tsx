import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { type FormProps } from './form.type';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const Title = styled.h5`
  font-size: 16px;
  font-weight: bold;
`;

export const WriterInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;

  div {
    margin-right: 16px;
  }
`;

// export const Form = styled.form`
//   width: 50vw;
//   min-width: 768px;
//   border-top: 1px solid #bdbdbd;
//   display: flex;
//   flex-direction: column;
//   margin: 60px auto 0 auto;
// `;

export const TextArea = styled.textarea`
  padding-top: 10px;
  padding-left: 10px;
  height: 160px;
  border: 1px solid #bdbdbd;
  background-color: white;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-top: none;
  padding-left: 10px;
`;

export const SubmitButton = styled.button<{ color: 'black' | 'yellow' }>`
  width: 100px;
  height: 52px;
  background-color: ${({ color }) => (color === 'black' ? 'black' : '#FFD600')};
  color: ${({ color }) => (color === 'black' ? 'white' : 'black')};
  font-size: 16px;
  font-weight: 500;
`;

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
