import styled from "styled-components";
import Hero from "../../../assets/images/Hero.png";

export const HeroContainer = styled.section`
  width: 100%;
  height: 384px;
  position: relative;
  background-image: url("${Hero}");
  background-size: cover;
  background-position: center;
  background-color: rgba(230, 103, 103, 0.05);
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
  background: #e66767;

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36.8px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 540px;
  margin-top: 120px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #e66767;

  @media (max-width: 768px) {
    margin-top: 80px;
    font-size: 28px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    font-size: 24px;
    line-height: 28px;
  }
`;
