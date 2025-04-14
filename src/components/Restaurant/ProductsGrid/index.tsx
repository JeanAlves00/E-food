import * as S from "./styles";
import { Product } from "../../../data/restaurantsPages";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <S.ProductsGrid>
      {products.map((product) => (
        <S.ProductCard key={product.id}>
          <S.ProductImage src={product.image} alt={product.name} />
          <S.ProductInfo>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.AddToCartButton>Adicionar ao carrinho</S.AddToCartButton>
          </S.ProductInfo>
        </S.ProductCard>
      ))}
    </S.ProductsGrid>
  );
};

export default ProductsGrid;
