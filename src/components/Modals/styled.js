import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000080;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  display: flex;
  justify-content: flex-end;
`;

export const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  min-height: 100px;
`;
