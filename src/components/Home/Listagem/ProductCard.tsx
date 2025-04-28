import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import Star from "../../../assets/svg/star.svg";
import { Restaurant } from "../../../services/api";

const ProductCard: React.FC<Restaurant> = ({
  id,
  capa,
  titulo,
  avaliacao,
  descricao,
  tipo,
  destacado,
}) => {
  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    navigate(`/restaurante/${id}`);
  };

  return (
    <s.Card>
      <s.ImageWrapper>
        <s.Image src={capa} alt={titulo} />
        <s.CategoriesContainer>
          {destacado && (
            <s.HighlightCategory>Destaque da semana</s.HighlightCategory>
          )}
          <s.Category>{tipo}</s.Category>
        </s.CategoriesContainer>
      </s.ImageWrapper>
      <s.CardContent>
        <s.HeaderContainer>
          <s.Title>{titulo}</s.Title>
          <s.Rating>
            <span>{avaliacao}</span>
            <img src={Star} alt="Estrela" />
          </s.Rating>
        </s.HeaderContainer>
        <s.Description>{descricao}</s.Description>
        <s.CardFooter>
          <button onClick={handleSaibaMaisClick}>Saiba mais</button>
        </s.CardFooter>
      </s.CardContent>
    </s.Card>
  );
};

export default ProductCard;
