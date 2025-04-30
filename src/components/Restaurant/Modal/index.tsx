import { MenuItem } from "../../../services/api";
import * as S from "./styles";

interface ModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: MenuItem) => void;
}

const Modal = ({ item, isOpen, onClose, onAddToCart }: ModalProps) => {
  if (!isOpen) return null;

  const handleAddToCart = () => {
    onAddToCart(item);
    onClose();
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <S.Content>
          <S.Image src={item.foto} alt={item.nome} />
          <S.Info>
            <S.Title>{item.nome}</S.Title>
            <S.Description>{item.descricao}</S.Description>
            <S.Portion>Serve: {item.porcao}</S.Portion>
            <S.AddToCartButton onClick={handleAddToCart}>
              Adicionar ao carrinho - R$ {item.preco.toFixed(2)}
            </S.AddToCartButton>
          </S.Info>
        </S.Content>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;
