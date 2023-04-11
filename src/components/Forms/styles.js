import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 10px;
  // margin-bottom: 20px;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid grey")}
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;

export const StyledButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export const Error = styled.p`
  color: red;
  font-size: 15px;
  text-align: left;
`;
