import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AsyncThunks } from "../../store/actions";
import {
  getProductDetails,
  getProductDetailsLoader,
} from "../../store/selectors";
import {
  Container,
  Description,
  DetailsContainer,
  Image,
  ImageContainer,
  Price,
  Title,
} from "./styles";

const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductDetails);
  const loading = useSelector(getProductDetailsLoader);

  const fetchProductDetails = useCallback(async () => {
    await dispatch(AsyncThunks.getProductDetails(params.id));
  }, [dispatch, params]);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  if (loading) return <h1> Loading...</h1>;

  return (
    <Container>
      <ImageContainer>
        <Image src={product.picture} alt={product.name} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{product.name}</Title>
        <Price>{product.price} so'm</Price>
        <Description>{product.description}</Description>
      </DetailsContainer>
    </Container>
  );
};

export default ProductDetailsPage;
