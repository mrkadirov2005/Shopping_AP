import ProductCard from "../ProductCard/ProductCard";
import { ProductListContainer } from "./styles";

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
