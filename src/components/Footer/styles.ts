import styled from "styled-components";
import { cores } from "../../styles/GlobalStyles";

export const FooterContainer = styled.footer`
  background-color: #ffebd8;
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 32px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.vermelho};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Disclaimer = styled.p`
  color: ${cores.vermelho};
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  max-width: 480px;
  line-height: 1.5;
`;
