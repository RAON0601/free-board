import styled from "@emotion/styled";

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
  padding-top: 10px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;

export const Radio = styled.input`
  margin-right: 4px;
`;
