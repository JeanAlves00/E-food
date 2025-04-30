import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { Restaurant, MenuItem, getRestaurantById } from "../../services/api";
import Header from "./Header";
import Banner from "./Banner";
import ProductsGrid from "./ProductsGrid";
import Loading from "../Loading";

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [cart, setCart] = useState<{ product: MenuItem; quantity: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        if (id) {
          const data = await getRestaurantById(id);
          setRestaurant(data);
        }
      } catch (error) {
        console.error("Erro ao carregar restaurante:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleAddToCart = (product: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (loading) {
    return <Loading />;
  }

  if (!restaurant) {
    return (
      <S.ErrorContainer>
        <S.ErrorMessage>Restaurante não encontrado</S.ErrorMessage>
      </S.ErrorContainer>
    );
  }

  return (
    <S.Container>
      <Header
        totalItems={totalItems}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
      />
      <Banner restaurant={restaurant} />
      <ProductsGrid
        products={restaurant.cardapio}
        onAddToCart={handleAddToCart}
      />
    </S.Container>
  );
};

export default RestaurantDetails;
