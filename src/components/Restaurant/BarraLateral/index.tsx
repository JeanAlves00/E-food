import { useEffect } from "react";
import { MenuItem } from "../../../services/api";
import * as S from "./styles";

interface CartItem {
  product: MenuItem;
  quantity: number;
}

interface BarraLateralProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
}

const BarraLateral = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
}: BarraLateralProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.preco * item.quantity,
      0
    );
  };

  return (
    <>
      <S.Overlay $isOpen={isOpen} onClick={onClose} />
      <S.SideBar $isOpen={isOpen}>
        <S.CartItems>
          {cartItems.map((item) => (
            <S.CartItem key={item.product.id}>
              <S.ItemImage src={item.product.foto} alt={item.product.nome} />
              <S.ItemInfo>
                <S.ItemTitle>{item.product.nome}</S.ItemTitle>
                <S.ItemPrice>R$ {item.product.preco.toFixed(2)}</S.ItemPrice>
              </S.ItemInfo>
              <S.RemoveButton
                onClick={() => onRemoveItem(item.product.id)}
                aria-label="Remover item"
              />
            </S.CartItem>
          ))}
        </S.CartItems>
        <S.TotalPrice>
          <span>Valor total</span>
          <span>R$ {calculateTotal().toFixed(2)}</span>
        </S.TotalPrice>
        <S.CheckoutButton>Continuar com a entrega</S.CheckoutButton>
      </S.SideBar>
    </>
  );
};

export default BarraLateral;
