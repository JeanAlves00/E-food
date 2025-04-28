import styled, { keyframes } from "styled-components";
import { cores } from "../../styles/GlobalStyles";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 245, 242, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${cores.pele};
  border-top: 4px solid ${cores.vermelho};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const LoadingText = styled.p`
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
