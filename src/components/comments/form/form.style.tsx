import styled from "@emotion/styled";

export const Form = styled.form`
  width: 50vw;
  min-width: 768px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  margin: 60px auto 0 auto;
`;

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

export const SubmitButton = styled.button<{ color: "black" | "yellow" }>`
  width: 100px;
  height: 52px;
  background-color: ${({ color }) => (color === "black" ? "black" : "#FFD600")};
  color: ${({ color }) => (color === "black" ? "white" : "black")};
  font-size: 16px;
  font-weight: 500;
`;
