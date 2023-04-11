import React from "react";
import { ModalBackground, ModalWrapper } from "./styled";

const CustomModal = ({ children, isOpen, closeModal, boxStyle }) => {
  if (!isOpen) return null;
  return (
    <ModalBackground onClick={closeModal} style={boxStyle}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
    </ModalBackground>
  );
};

export default CustomModal;
