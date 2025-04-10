import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const GridContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 32px;
  padding: 0 8px;
  margin-top: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 24px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Card = styled.div`
  background-color: transparent;
  border: none;
  width: 100%;
  max-width: 472px;
  height: 398px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 217px;
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoriesContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-width: calc(100% - 32px);
  justify-content: flex-end;
`;

export const Category = styled.span`
  background-color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  color: ${cores.branco};
  font-weight: 700;
  padding: 6px 12px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  display: inline-block;
  height: 26px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 16px;
  flex-grow: 1;
  height: 181px;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.vermelho};
  background-color: ${cores.branco};

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: ${cores.vermelho};
  font-weight: 700;
  line-height: 21px;
  font-family: "Roboto", sans-serif;
`;

export const Rating = styled.div`
  font-weight: 700;
  color: ${cores.vermelho};
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 21px;
  font-family: "Roboto", sans-serif;
  gap: 8px;
`;

export const Description = styled.p`
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  flex: 1;
  width: 100%;
  margin: 0;
  height: 88px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  padding-top: 16px;

  button {
    width: 82px;
    height: 24px;
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 16px;
    border: none;
    padding: 4px 0;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s;
  }
`;
