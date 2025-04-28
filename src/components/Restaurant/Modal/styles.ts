import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${cores.vermelho};
  width: 1024px;
  height: 344px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    min-height: 344px;
    margin: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const Info = styled.div`
  flex: 1;
  color: ${cores.pele};
  max-width: 656px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  color: #ffffff;
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 16px;
  flex: 1;
`;

export const Portion = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 32px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${cores.pele};
  font-size: 24px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const AddToCartButton = styled.button`
  background-color: ${cores.pele};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
  height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 16px;
  }
`;
