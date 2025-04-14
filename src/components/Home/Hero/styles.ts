import styled from "styled-components";
import HeroBackground from "../../../assets/images/Hero.png";
import { cores } from "../../../styles/GlobalStyles";

export const HeroContainer = styled.section`
  width: 100%;
  height: 360px;
  position: relative;
  background-image: url("${HeroBackground}");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 16px 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 320px;
    padding: 30px 16px 50px;
  }

  @media (max-width: 480px) {
    height: 280px;
    padding: 20px 16px 40px;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  background: ${cores.vermelho};

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
  }
`;

export const Title = styled.h1`
  max-width: 540px;
  margin-top: 120px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${cores.vermelho};

  @media (max-width: 768px) {
    margin-top: 80px;
    font-size: 28px;
    line-height: 32px;
  }
`;
