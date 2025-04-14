import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const Banner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 280px;
  z-index: 10;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const RestaurantInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0;
`;

export const Type = styled.p`
  margin-left: 170px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  color: ${cores.branco};

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Title = styled.h1`
  max-width: 676px;
  margin-left: 170px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: ${cores.branco};

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 24px;
    line-height: 28px;
    max-width: 90%;
  }
`;
