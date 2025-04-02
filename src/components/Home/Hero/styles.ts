import styled from "styled-components";
import Hero from "../../../assets/images/Hero.png";

export const HeroContainer = styled.section`
  width: 100%;
  height: 250px;
  background-image: url(${Hero});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  top: 40px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #d9392b;
  text-align: center;
  max-width: 600px;
`;
