import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import Star from "../../../assets/svg/star.svg"; // Você precisará adicionar este ícone

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
  categories: string[];
  isHighlighted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  rating,
  categories,
  isHighlighted = false,
}) => {
  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    navigate(`/restaurante/${id}`);
  };

  return (
    <s.Card>
      <s.ImageWrapper>
        <s.Image src={image} alt={title} />
        <s.CategoriesContainer>
          {isHighlighted && (
            <s.HighlightCategory>Destaque da semana</s.HighlightCategory>
          )}
          {categories.map((category, index) => (
            <s.Category key={index}>{category}</s.Category>
          ))}
        </s.CategoriesContainer>
      </s.ImageWrapper>
      <s.CardContent>
        <s.HeaderContainer>
          <s.Title>{title}</s.Title>
          <s.Rating>
            <span>{rating}</span>
            <img src={Star} alt="Estrela" />
          </s.Rating>
        </s.HeaderContainer>
        <s.Description>{description}</s.Description>
        <s.CardFooter>
          <button onClick={handleSaibaMaisClick}>Saiba mais</button>
        </s.CardFooter>
      </s.CardContent>
    </s.Card>
  );
};

export default ProductCard;
