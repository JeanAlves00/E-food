import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 60px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
`;

export const ProductCard = styled.div`
  background: ${cores.vermelho};
  border: 8px solid ${cores.vermelho};
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
`;

export const ProductImage = styled.img`
  height: 167px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const ProductInfo = styled.div`
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  color: ${cores.pele};
  margin-bottom: 8px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${cores.pele};
  margin-bottom: 10px;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.pele};
  margin-bottom: 12px;
  display: none;
`;

export const AddToCartButton = styled.button`
  background: ${cores.pele};
  color: ${cores.vermelho};
  border: none;
  padding: 8px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;

  @media (max-width: 480px) {
    padding: 6px 0;
    font-size: 13px;
  }
`;
