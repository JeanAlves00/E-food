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
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  // Simulando busca de dados do restaurante usando o ID
  useEffect(() => {
    // Simulando um delay de carregamento
    const timer = setTimeout(() => {
      // Convertendo o ID da URL para número e buscando no banco de dados simulado
      const restaurantId = parseInt(id || "1");
      const foundRestaurant = restaurantsDatabase.find(
        (r) => r.id === restaurantId
      );

      // Se não encontrar o restaurante com o ID fornecido, usa o primeiro como fallback
      setRestaurant(foundRestaurant || restaurantsDatabase[0]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Verifica se o produto já está no carrinho
      const existingProduct = prevCart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        // Incrementa a quantidade se o produto já existir
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Adiciona novo produto com quantidade 1
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

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
          <S.Title>{restaurant.name}</S.Title>
          <S.Type>{restaurant.type}</S.Type>
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
              <S.AddToCartButton onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </S.AddToCartButton>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
};

export default RestaurantDetails;
