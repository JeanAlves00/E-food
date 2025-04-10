import React from "react";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import * as S from "./styles";
import logo from "../../../assets/svg/logo.svg";

interface HeaderProps {
  totalItems: number;
}

const Header: React.FC<HeaderProps> = ({ totalItems }) => {
  return (
    <S.Header>
      <S.BackButton to="/" aria-label="Voltar para lista de restaurantes">
        <FaArrowLeft style={{ marginRight: "8px" }} />
        Restaurantes
      </S.BackButton>

      <S.LogoImage src={logo} alt="Logo E-food" />

      <S.CartCounter title={`${totalItems} itens no carrinho`}>
        <FaShoppingCart aria-hidden="true" />
        <span>
          {totalItems} item{totalItems !== 1 ? "ns" : ""} no carrinho
        </span>
      </S.CartCounter>
    </S.Header>
  );
};

export default Header;
