import React from "react";
import * as S from "./styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/svg/logo.svg";

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.Logo src={Logo} alt="efood logo" />

      <S.SocialMediaContainer>
        <S.IconWrapper>
          <FaFacebook />
        </S.IconWrapper>
        <S.IconWrapper>
          <FaInstagram />
        </S.IconWrapper>
        <S.IconWrapper>
          <FaTwitter />
        </S.IconWrapper>
      </S.SocialMediaContainer>

      <S.Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Disclaimer>
    </S.FooterContainer>
  );
};

export default Footer;
