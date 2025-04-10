import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import {
  Restaurant,
  Product,
  restaurantsDatabase,
} from "../../data/restaurantsPages";
import logo from "../../assets/svg/logo.svg";

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [cart] = useState<{ product: Product; quantity: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const restaurantId = parseInt(id || "1");
      const foundRestaurant = restaurantsDatabase.find(
        (r) => r.id === restaurantId
      );

      setRestaurant(foundRestaurant || restaurantsDatabase[0]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton to="/">
          <FaArrowLeft style={{ marginRight: "8px" }} />
          Restaurantes
        </S.BackButton>
        <S.LogoImage src={logo} alt="Logo" />
        <S.CartCounter>
          <FaShoppingCart /> {totalItems} item(ns) no carrinho
        </S.CartCounter>
      </S.Header>

      <S.Banner>
        <S.BannerImage src={restaurant.image} alt={restaurant.name} />
        <S.RestaurantInfo>
          <S.Type>{restaurant.type}</S.Type>
          <S.Title>{restaurant.name}</S.Title>
        </S.RestaurantInfo>
      </S.Banner>

      <S.ProductsGrid>
        {restaurant.products.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage src={product.image} alt={product.name} />
            <S.ProductInfo>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductDescription>{product.description}</S.ProductDescription>
              <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>
              <S.AddToCartButton>Adicionar ao carrinho</S.AddToCartButton>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
};

export default RestaurantDetails;
