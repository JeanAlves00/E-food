import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../../../assets/images/Header.png";
import { cores } from "../../../styles/GlobalStyles";

export const Header = styled.header`
  width: 100%;
  height: 186px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px calc((100% - 1024px) / 2); // Alinhe com a largura dos Cards
  background-image: url(${header});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(230, 103, 103, 0.05);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(230, 103, 103, 0.05);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 186px;
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
    position: relative;
    top: 0;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  z-index: 2;
  background-color: ${cores.vermelho};

  @media (max-width: 768px) {
    position: relative;
    order: -1;
    margin: 10px 0;
    top: auto;
    left: auto;
    transform: none;
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  left: calc((100% - 1024px) / 2);
  top: 59px;
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
  }
`;

export const CartCounter = styled.div`
  position: absolute;
  right: calc((100% - 1024px) / 2);
  top: 59px;
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  z-index: 2;
  width: auto;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
  }
`;
