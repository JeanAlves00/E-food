import styled, { keyframes } from "styled-components";
import { cores } from "../../styles/GlobalStyles";

export const Container = styled.div`
  padding-bottom: 60px;
  background-color: #fff5f2;
  margin: 0 auto;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff5f2;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${cores.pele};
  border-top: 5px solid ${cores.vermelho};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

export const LoadingText = styled.p`
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff5f2;
`;

export const ErrorMessage = styled.p`
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
