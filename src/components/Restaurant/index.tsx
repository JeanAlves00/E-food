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
  const [cart] = useState<{ product: MenuItem; quantity: number }[]>([]);
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
      <Header totalItems={totalItems} />
      <Banner restaurant={restaurant} />
      <ProductsGrid products={restaurant.cardapio} />
    </S.Container>
  );
};

export default RestaurantDetails;
