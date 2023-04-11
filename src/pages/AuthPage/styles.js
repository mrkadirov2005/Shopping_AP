import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 400px;
`;

export const FormTabs = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const FormTab = styled.button`
  background-color: ${({ isActive }) => (isActive ? "#0077b3" : "#f1f1f1")};
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#333333")};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#006699" : "#dddddd")};
  }
`;
