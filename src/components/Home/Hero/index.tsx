import * as s from "./styles";
import logo from "../../../assets/svg/logo.svg";

interface HeroProps {
  logoSrc?: string;
  title?: string;
}

const Hero = ({
  logoSrc = logo,
  title = "Viva experiências gastronômicas no conforto da sua casa",
}: HeroProps) => {
  return (
    <s.HeroContainer>
      <s.Logo src={logoSrc} alt="efood logo" />
      <s.Title>{title}</s.Title>
    </s.HeroContainer>
  );
};

export default Hero;
