import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../../assets/images/Header.png";

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
`;
export const LogoImage = styled.img`
  width: 100px;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #d9534f;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export const CartCounter = styled.div`
  background: #d9534f;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: #b52b27;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  background-size: cover;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RestaurantInfo = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Type = styled.p`
  font-size: 16px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 60px;
  max-width: 1200px;
  margin: auto;
`;

export const ProductCard = styled.div`
  background: #ffe5d9;
  border: 2px solid #f5b5a1;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  color: #d9534f;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  flex-grow: 1;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #d9534f;
  margin-bottom: 12px;
`;

export const AddToCartButton = styled.button`
  background: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #b52b27;
  }
`;
