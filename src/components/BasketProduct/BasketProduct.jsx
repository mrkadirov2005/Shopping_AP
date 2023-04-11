import React from "react";
import { useSelector } from "react-redux";
import { getProductsList } from "../../store/selectors";
import { BasketImage } from "./styles";

const BasketProduct = ({ product }) => {
  const productsList = useSelector(getProductsList);

  const productDetails = productsList.find((p) => p._id === product.id);

  return (
    <li>
      {productDetails?.name} {product.amount}
      <BasketImage src={productDetails.picture} alt='' />
    </li>
  );
};

export default BasketProduct;
