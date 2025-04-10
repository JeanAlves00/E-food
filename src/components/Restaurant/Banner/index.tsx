import React from "react";
import * as S from "./styles";
import { Restaurant } from "../../../data/restaurantsPages";

interface BannerProps {
  restaurant: Restaurant;
}

const Banner: React.FC<BannerProps> = ({ restaurant }) => {
  return (
    <S.Banner>
      <S.BannerImage
        src={restaurant.image}
        alt={`Imagem de capa do restaurante ${restaurant.name}`}
      />
      <S.Overlay />
      <S.RestaurantInfo>
        <S.Type>{restaurant.type}</S.Type>
        <S.Title>{restaurant.name}</S.Title>
      </S.RestaurantInfo>
    </S.Banner>
  );
};

export default Banner;
