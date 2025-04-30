import { useState } from "react";
import * as S from "./styles";
import { MenuItem } from "../../../services/api";
import Modal from "../Modal";

interface ProductsGridProps {
  products: MenuItem[];
  onAddToCart: (product: MenuItem) => void;
}

const truncateText = (text: string, limit: number) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  onAddToCart,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  return (
    <>
      <S.ProductsGrid>
        {products.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage src={product.foto} alt={product.nome} />
            <S.ProductInfo>
              <S.ProductTitle>{product.nome}</S.ProductTitle>
              <S.ProductDescription>
                {truncateText(product.descricao, 16)}
              </S.ProductDescription>
              <S.AddToCartButton onClick={() => setSelectedProduct(product)}>
                Mais Detalhes
              </S.AddToCartButton>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductsGrid>

      {selectedProduct && (
        <Modal
          item={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  );
};

export default ProductsGrid;
