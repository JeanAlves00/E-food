import React from "react";
import * as s from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  categories: string[]; // Mudando de category para um array de categorias
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  rating,
  categories,
}) => {
  return (
    <s.Card>
      <s.ImageWrapper>
        <s.Image src={image} alt={title} />
        <s.CategoriesContainer>
          {categories.map((category, index) => (
            <s.Category key={index}>{category}</s.Category>
          ))}
        </s.CategoriesContainer>
      </s.ImageWrapper>
      <s.CardContent>
        <s.Title>{title}</s.Title>
        <s.Rating>{rating} ⭐</s.Rating>
        <s.Description>{description}</s.Description>
        <s.Button>Saiba mais</s.Button>
      </s.CardContent>
    </s.Card>
  );
};

export default ProductCard;
