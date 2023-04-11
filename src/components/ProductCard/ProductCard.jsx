import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { basketActions } from "../../store/reducers/slices/basketSlice";
import { getBasketProducts } from "../../store/selectors";
import {
  Button,
  CardActions,
  CardAmount,
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
} from "./styles";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketProducts = useSelector(getBasketProducts);
  const { _id: id, picture, name, description, price } = product;

  const basketProduct = basketProducts?.find(
    (basketProd) => basketProd.id === id
  );

  const addToBasket = (e) => {
    e.stopPropagation();
    dispatch(basketActions.add({ id, price }));
  };

  const increaseQuantity = (e) => {
    e.stopPropagation();
    dispatch(basketActions.increaseQuantity({ id, price }));
  };

  const decreaseQuantity = (e) => {
    e.stopPropagation();
    dispatch(basketActions.decreaseQuantity({ id, price }));
  };

  return (
    <CardContainer onClick={() => navigate(`/products/${id}`)}>
      <CardImage src={picture} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>{price}</CardPrice>
      </CardContent>
      {basketProduct ? (
        <CardActions>
          <Button onClick={decreaseQuantity}>-</Button>
          <CardAmount>{basketProduct?.amount}</CardAmount>
          <Button onClick={increaseQuantity}>+</Button>
        </CardActions>
      ) : (
        <CardActions>
          <Button onClick={addToBasket}>Add to Basket</Button>
        </CardActions>
      )}
    </CardContainer>
  );
};

export default ProductCard;
