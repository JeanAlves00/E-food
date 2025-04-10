import styled from "styled-components";
import Hero from "../../../assets/images/Hero.png";

export const HeroContainer = styled.section`
  width: 100%;
  height: 384px;
  left: 0px;
  top: -24px;
  background-image: url("${Hero}");
  background-size: cover;
  background-position: center;
  background-color: rgba(230, 103, 103, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 320px;
    position: relative;
    top: 0;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  background: #e66767;

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
    top: 30px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36.8px;
    top: 20px;
  }
`;

export const Title = styled.h1`
  position: absolute;

  height: 84px;
  left: 50%;
  top: 236px;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #e66767;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 28px;
    line-height: 32px;
    top: 180px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 28px;
    top: 140px;
    width: 95%;
  }
`;
