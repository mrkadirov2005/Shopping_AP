import React from "react";
import { FaShoppingBasket, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/reducers/slices/modalSlice";
import {
  BasketCounter,
  BasketIcon,
  Icon,
  Icons,
  Logo,
  StyledHeader,
} from "./styles";

const Header = () => {
  // const { isOpen, toggleModal } = useModal();
  const dispatch = useDispatch();

  const openHeartModal = () => {
    dispatch(
      modalActions.showModal({
        id: "cart_modal",
        modalContent: <h1>I am ulugbek</h1>,
      })
    );
    dispatch(modalActions.hideAllModals());
  };

  return (
    <StyledHeader>
      <Logo>Shopping Website</Logo>
      <Icons>
        <Icon onClick={openHeartModal}>
          <FaHeart />
        </Icon>
        <BasketIcon>
          <FaShoppingBasket />
          <BasketCounter>3</BasketCounter>
        </BasketIcon>
      </Icons>
      {/* <CustomModal closeModal={toggleModal} isOpen={isOpen}>
        <Button onClick={toggleModal}>close</Button>
        <h1>Hello from modal</h1>
      </CustomModal> */}
    </StyledHeader>
  );
};

export default Header;
