import React from "react";
import * as s from "./styles";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../assets/svg/logo.svg";

const Footer: React.FC = () => {
  return (
    <s.FooterContainer>
      <s.Logo>
        <img src={logo} alt="efood Logo" height="40" />
      </s.Logo>
      <s.SocialIcons>
        <s.Icon href="#">
          <FaInstagram />
        </s.Icon>
        <s.Icon href="#">
          <FaFacebookF />
        </s.Icon>
        <s.Icon href="#">
          <FaTwitter />
        </s.Icon>
      </s.SocialIcons>
      <s.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </s.FooterText>
    </s.FooterContainer>
  );
};

export default Footer;
