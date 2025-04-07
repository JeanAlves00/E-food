import styled from "styled-components";

export const GridContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
  background-color: #fff5f0;
  margin-top: 24px;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
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
  background-color: #e66767;
  font-family: "roboto", sans-serif;
  color: #fff;
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
  color: #e66767;
  font-weight: bold;
`;

export const Rating = styled.div`
  font-weight: bold;
  color: #e66767;
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  color: #e66767;
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
    background-color: #e66767;
    color: #fff;
    font-weight: bold;
    border: none;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;
