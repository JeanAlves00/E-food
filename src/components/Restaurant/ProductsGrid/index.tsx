import React from "react";
import * as S from "./styles";
import { Product } from "../../../data/restaurantsPages";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  const handleAddToCart = (product: Product) => {
    console.log(`Produto adicionado: ${product.name}`);
  };

  return (
    <S.ProductsGrid>
      {products.map((product) => (
        <S.ProductCard key={product.id}>
          <S.ProductImage src={product.image} alt={product.name} />
          <S.ProductInfo>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>
            <S.AddToCartButton
              onClick={() => handleAddToCart(product)}
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              Adicionar ao carrinho
            </S.AddToCartButton>
          </S.ProductInfo>
        </S.ProductCard>
      ))}
    </S.ProductsGrid>
  );
};

export default ProductsGrid;
