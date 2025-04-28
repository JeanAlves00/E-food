export interface Restaurant {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
}

export interface MenuItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const API_URL = "https://fake-api-tau.vercel.app/api/efood/restaurantes";

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  const restaurants = await getRestaurants();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    throw new Error("Restaurante não encontrado");
  }

  return restaurant;
};
