import styled from "styled-components";
import { cores } from "../../styles/GlobalStyles";

export const FooterContainer = styled.footer`
  margin-top: 60px;
  background-color: ${cores.pele};
  padding: 40px 20px;
  text-align: center;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${cores.vermelho};
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Icon = styled.a`
  font-size: 1.5rem;
  color: ${cores.vermelho};
  transition: 0.3s;

  &:hover {
    color: ${cores.vermelho};
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${cores.vermelho};
  max-width: 600px;
  margin: auto;
  line-height: 1.5;
`;
