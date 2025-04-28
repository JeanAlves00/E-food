import React from "react";
import * as S from "./styles";
import { Restaurant } from "../../../services/api";

interface BannerProps {
  restaurant: Restaurant;
}

const Banner: React.FC<BannerProps> = ({ restaurant }) => {
  return (
    <S.Banner>
      <S.BannerImage
        src={restaurant.capa}
        alt={`Imagem de capa do restaurante ${restaurant.titulo}`}
      />
      <S.Overlay />
      <S.RestaurantInfo>
        <S.Type>{restaurant.tipo}</S.Type>
        <S.Title>{restaurant.titulo}</S.Title>
      </S.RestaurantInfo>
    </S.Banner>
  );
};

export default Banner;
