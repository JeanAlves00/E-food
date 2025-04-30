import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import logo from "../../../assets/svg/logo.svg";
import Loading from "../../Loading";
import BarraLateral from "../BarraLateral";

interface Product {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
}

interface HeaderProps {
  totalItems: number;
  cartItems: Array<{ product: Product; quantity: number }>;
  onRemoveItem: (id: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  totalItems = 0,
  cartItems,
  onRemoveItem,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
    <>
      <S.Header>
        <S.BackButton to="/" onClick={handleBackClick}>
          Restaurantes
        </S.BackButton>
        <S.LogoImage src={logo} alt="Logo E-food" />
        <S.CartCounter
          onClick={() => setIsCartOpen(true)}
          style={{ cursor: "pointer" }}
        >
          <span>{totalItems} produto(s) no carrinho</span>
        </S.CartCounter>
      </S.Header>
      <BarraLateral
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={onRemoveItem}
      />
    </>
  );
};

export default Header;
