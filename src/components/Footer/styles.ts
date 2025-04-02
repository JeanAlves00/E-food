import styled from "styled-components";
import logo from "../../../assets/svg/logo.svg";

export const FooterContainer = styled.footer`
  background-color: #ffe8d6;
  padding: 40px 20px;
  text-align: center;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #d9392b;
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
  color: #d9392b;
  transition: 0.3s;

  &:hover {
    color: #b32b21;
    transform: scale(1.1);
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #d9392b;
  max-width: 600px;
  margin: auto;
  line-height: 1.5;
`;
