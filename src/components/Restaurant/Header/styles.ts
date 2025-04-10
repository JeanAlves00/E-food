import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../../../assets/images/Header.png";
import { cores } from "../../../styles/GlobalStyles";

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
  color: ${cores.vermelho};
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
`;

export const CartCounter = styled.div`
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 600;
`;
