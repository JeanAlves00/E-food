import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../../assets/images/Header.png";
import { cores } from "../../styles/GlobalStyles";

export const Container = styled.div`
  margin: 0 auto;
  background: #fdf3e7;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: url(${header});

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const LogoImage = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    order: -1;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #d9534f;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
`;

export const CartCounter = styled.div`
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 600;
`;

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  background-size: cover;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Type = styled.p`
  font-size: 18px;
  margin-bottom: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-bottom: 100px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    margin-bottom: 70px;
    font-size: 14px;
  }
`;

export const RestaurantInfo = styled.div`
  color: ${cores.branco};
  padding: 50px 120px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  text-align: left;

  @media (max-width: 1024px) {
    padding: 50px 80px;
  }

  @media (max-width: 768px) {
    padding: 30px 60px;
  }

  @media (max-width: 480px) {
    padding: 20px 30px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

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

  &:hover {
    background: #f8e0c5;
  }

  @media (max-width: 480px) {
    padding: 6px 0;
    font-size: 13px;
  }
`;
