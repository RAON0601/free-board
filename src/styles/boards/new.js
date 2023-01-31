import styled from "@emotion/styled";

export const NewBoardForm = styled.form`
  box-sizing: border-box;
  width: 50vw;
  min-width: 700px;
  margin: 0 auto;
  padding: 0 32px 32px 32px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormName = styled.h3`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 36px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 24px;
  margin: 8px 0;
`;

export const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputFieldMid = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

export const InputFieldSmall = styled.div`
  width: 30%;
`;

export const Label = styled.label`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const InputError = styled.p`
  color: red;
  margin-top: 4px;
  padding-left: 4px;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
`;

export const ButtonBlack = styled.button`
  background-color: black;
  color: white;
  padding: 4px 8px;
  height: 52px;
  cursor: pointer;
`;

export const ButtonYellow = styled.button`
  background-color: #ffd600;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 60px;
  border: none;
  cursor: pointer;
`;

export const GrayBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  margin: 0 8px;
`;

export const Radio = styled.input`
  margin-right: 4px;
`;
