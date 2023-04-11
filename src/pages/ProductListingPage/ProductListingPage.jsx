import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { AsyncThunks } from "../../store/actions";
import { getProductsList } from "../../store/selectors";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsList);

  const fetchProducts = async () => {
    await dispatch(AsyncThunks.getProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductList products={products} />;
};

export default ProductListingPage;
