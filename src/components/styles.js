import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ isDark }) => isDark};

  p {
    font-size: 20px;
  }
`;

export const ProductCard = styled.li`
  img {
    width: 200px;
  }
  button {
    padding: 0 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
