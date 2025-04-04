import React from "react";
import * as s from "./styles";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
  categories: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  rating,
  categories,
}) => {
  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    // Navega para a página de detalhes com o ID do restaurante
    navigate(`/restaurante/${id}`);
  };

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
        <s.Button onClick={handleSaibaMaisClick}>Saiba Mais</s.Button>
      </s.CardContent>
    </s.Card>
  );
};

export default ProductCard;
