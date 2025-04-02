import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 60px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(255, 0, 0, 0.7);
  transition: transform 0.2s ease;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

export const CategoriesContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`;

export const Category = styled.span`
  background: #d9392b;
  color: white;
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const CardContent = styled.div`
  padding: 15px;
  text-align: left;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #e66767;
  margin-bottom: 5px;
`;

export const Rating = styled.div`
  font-size: 1rem;
  color: #ff9800;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #e66767;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: #d9392b;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #b32b21;
  }
`;
