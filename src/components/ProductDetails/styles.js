import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 30px 0;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const DetailsContainer = styled.div`
  flex: 2;
  padding: 0 30px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
