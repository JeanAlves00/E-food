import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import logo from "../../../assets/svg/logo.svg";
import Loading from "../../Loading";

interface HeaderProps {
  totalItems: number;
}

const Header: React.FC<HeaderProps> = ({ totalItems = 0 }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 500);
  };

  if (isLoading) return <Loading />;

  return (
    <S.Header>
      <S.BackButton to="/" onClick={handleBackClick}>
        Restaurantes
      </S.BackButton>
      <S.LogoImage src={logo} alt="Logo E-food" />
      <S.CartCounter>
        <span>{totalItems} produto(s) no carrinho</span>
      </S.CartCounter>
    </S.Header>
  );
};

export default Header;
