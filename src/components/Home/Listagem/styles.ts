import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyles";

export const GridContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-top: 24px;
`;

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  width: 472;
  height: 398;
  top: 440px;
  left: 171px;
  border-width: 1px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  margin: -1px;
  margin-bottom: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoriesContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: calc(100% - 1rem);
`;

export const Category = styled.span`
  background-color: ${cores.vermelho};
  font-family: "roboto", sans-serif;
  color: ${cores.branco};
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-grow: 1;
  height: calc(100% - 200px);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${cores.vermelho};
  font-weight: bold;
`;

export const Rating = styled.div`
  font-weight: bold;
  color: ${cores.vermelho};
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;

  flex: 1;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;

  button {
    margin-top: 8px;
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    font-weight: bold;
    border: none;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;
