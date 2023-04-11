import React from "react";
import {
  Container,
  Description,
  DetailsContainer,
  Image,
  ImageContainer,
  Price,
  Title,
} from "./styles";

const ProductDetails = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://evos.uz/image/cache/catalog/products/products/beverages/pepsi-1.5l/pepsi-1.5l-800x800.jpg"
          alt="Pepsi"
        />
      </ImageContainer>
      <DetailsContainer>
        <Title>Pepsi, 1.5L</Title>
        <Price>$1.49</Price>
        <Description>
          Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally
          created and developed in 1893 by Caleb Bradham and introduced as
          Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened
          to Pepsi in 1961.
        </Description>
      </DetailsContainer>
    </Container>
  );
};

export default ProductDetails;
