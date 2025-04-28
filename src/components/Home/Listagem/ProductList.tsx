import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../Loading";
import * as s from "./styles";
import { Restaurant, getRestaurants } from "../../../services/api";

const ProductList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Erro ao carregar restaurantes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <Loading />;

  return (
    <s.GridContainer>
      {restaurants.map((restaurant) => (
        <ProductCard key={restaurant.id} {...restaurant} />
      ))}
    </s.GridContainer>
  );
};

export default ProductList;
