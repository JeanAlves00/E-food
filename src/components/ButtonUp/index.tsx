import React, { useState, useEffect } from "react";
import * as S from "./styles";

const ButtonUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controla a visibilidade do botão com base na posição de rolagem
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Limpeza do event listener quando o componente for desmontado
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Button
      onClick={scrollToTop}
      className={isVisible ? "visible" : ""}
      title="Voltar ao topo"
      aria-label="Voltar ao topo da página"
    >
      ↑
    </S.Button>
  );
};

export default ButtonUp;
