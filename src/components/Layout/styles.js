import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  font-size: 20px;
  margin-left: 20px;
`;

export const BasketIcon = styled(Icon)`
  position: relative;
`;

export const BasketCounter = styled.span`
  background-color: #ff0000;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: -5px;
  right: -10px;
  padding: 2px 5px;
`;

export const Button = styled.button`
  // background-color: #0099cc;
  // color: #ffffff;
  color: black;
  background: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    // background-color: #0077b3;
    opacity: 0.6;
  }
`;
