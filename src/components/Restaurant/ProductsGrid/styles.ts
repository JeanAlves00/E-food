import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 1024px;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 30px 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
  }
`;

export const ProductCard = styled.div`
  background: ${cores.vermelho};
  width: 320px;
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    min-height: 320px;
  }
`;
export const ProductImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin: 8px 8px 0;

  @media (max-width: 1024px) {
    width: calc(100% - 16px);
  }
`;

export const ProductInfo = styled.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${cores.pele};
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.pele};
  margin-bottom: 8px;
  flex-grow: 1;
  overflow: hidden;
`;

export const AddToCartButton = styled.button`
  background: ${cores.pele};
  color: ${cores.vermelho};
  border: none;
  height: 24px;
  width: 304px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
