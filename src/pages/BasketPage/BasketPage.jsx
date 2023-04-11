import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api/axios";
import endpoints from "../../api/endpoints";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import { basketActions } from "../../store/reducers/slices/basketSlice";
import { getBasket, getUser } from "../../store/selectors";

const BasketPage = () => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket);
  const user = useSelector(getUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreateOrder = async () => {
    try {
      setIsLoading(true);
      await api.post(endpoints.orders.orders, { ...basket, user: user._id });
      dispatch(basketActions.clear());
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Here is basket products</h1>
      <ul>
        {basket.products.map((basketProd, index) => (
          <BasketProduct key={index} product={basketProd} />
        ))}
      </ul>
      <p>Total price: {basket.price}</p>

      <p>Click this button to create order</p>
      <button onClick={handleCreateOrder}>create order</button>
    </div>
  );
};

export default BasketPage;
