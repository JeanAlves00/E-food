import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 1000;
`;

export const SideBar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-384px")};
  width: 384px;
  height: 100vh;
  background-color: ${cores.vermelho};
  transition: right 0.3s ease-in-out;
  z-index: 1001;
  padding: 32px 8px;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${cores.branco};
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
`;

export const CartItems = styled.div`
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartItem = styled.div`
  background-color: ${cores.pele};
  padding: 8px;
  height: 96px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  position: relative;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  color: ${cores.vermelho};
  font-weight: 900;
  font-family: "Roboto", sans-serif;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  line-height: 22px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${cores.vermelho};
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartFooter = styled.div`
  position: absolute;
  bottom: 32px;
  left: 8px;
  right: 8px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.pele};
  font-size: 14px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  margin-bottom: 16px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.pele};
  color: ${cores.vermelho};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  text-align: center;
`;
