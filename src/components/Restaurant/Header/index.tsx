import * as S from "./styles";
import logo from "../../../assets/svg/logo.svg";

interface HeaderProps {
  totalItems: number;
}

const Header: React.FC<HeaderProps> = ({ totalItems = 0 }) => {
  return (
    <S.Header>
      <S.BackButton to="/">Restaurantes</S.BackButton>

      <S.LogoImage src={logo} alt="Logo E-food" />

      <S.CartCounter>
        <span>{totalItems} produto(s) no carrinho</span>
      </S.CartCounter>
    </S.Header>
  );
};

export default Header;
