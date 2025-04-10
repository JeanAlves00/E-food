import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import {
  Restaurant,
  Product,
  restaurantsDatabase,
} from "../../data/restaurantsPages";
import Header from "./Header";
import Banner from "./Banner";
import ProductsGrid from "./ProductsGrid";

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
      <Header totalItems={totalItems} />
      <Banner restaurant={restaurant} />
      <ProductsGrid products={restaurant.products} />
    </S.Container>
  );
};

export default RestaurantDetails;
