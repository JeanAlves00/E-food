import ProductCard from "./ProductCard";
import * as s from "./styles";
import { products } from "../../../data/resturants";

const ProductList: React.FC = () => {
  return (
    <s.GridContainer>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </s.GridContainer>
  );
};

export default ProductList;
