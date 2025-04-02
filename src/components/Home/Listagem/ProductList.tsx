import React from "react";
import ProductCard from "./ProductCard";
import * as s from "./styles";

const products = [
  {
    image:
      "https://institucional.ifood.com.br/wp-content/uploads/2023/10/iFN_comidajaponesa-1024x692-1.webp",
    title: "Hoiki Sushi",
    description:
      "Sushi fresco com um toque de arte culinária, combinando tradição japonesa com criatividade. Experimente cada detalhe cuidadosamente preparado, que exalta sabores intensos e texturas surpreendentes para um deleite visual e gustativo prolongado.",
    rating: 4.9,
    categories: ["Especialidades do Chef", "Japonesa"],
  },
  {
    image:
      "https://www.skymsen.com/ckfinder/userfiles/images/pizza%20de%20calabresa.jpg",
    title: "La Dolce Vita Gastronomia",
    description:
      "Pizzas artesanais e massas suculentas, preparadas com ingredientes selecionados e receitas de família. Sinta o sabor marcante e as porções expandidas de sabor que encantam e celebram cada momento à mesa.",
    rating: 4.7,
    categories: ["Culinária Italiana", "Massas & Pizzas"],
  },
  {
    image: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg",
    title: "Sabor de México",
    description:
      "Autêntica comida mexicana com temperos tradicionais e ingredientes frescos. Experimente nossos tacos, burritos e guacamole caseiro que transportam você diretamente para as ruas de Cidade do México.",
    rating: 4.8,
    categories: ["Mexicana", "Picante"],
  },
  {
    image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    title: "Casa do Churrasco",
    description:
      "O melhor da culinária brasileira com carnes nobres selecionadas e grelhadas no ponto perfeito. Buffet completo com acompanhamentos típicos e sobremesas caseiras que completam a experiência gastronômica.",
    rating: 4.6,
    categories: ["Brasileira", "Churrascaria"],
  },
  {
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg",
    title: "Aroma do Líbano",
    description:
      "Delícias da culinária árabe preparadas com especiarias importadas e técnicas tradicionais. Do kafta ao kibbe, cada prato é uma viagem pelos sabores do Oriente Médio com toques contemporâneos.",
    rating: 4.5,
    categories: ["Árabe", "Comida Saudável"],
  },
  {
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    title: "Jardim Verde",
    description:
      "Restaurante especializado em pratos veganos e vegetarianos com ingredientes orgânicos e de produtores locais. Combinações criativas e nutritivas que provam que comida saudável também é saborosa e satisfatória.",
    rating: 4.4,
    categories: ["Vegana", "Orgânica"],
  },
];

const ProductList: React.FC = () => {
  return (
    <s.GridContainer>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </s.GridContainer>
  );
};

export default ProductList;
