export interface Restaurant {
  id: number;
  name: string;
  image: string;
  type: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Banco de dados simulado com vários restaurantes
export const restaurantsDatabase: Restaurant[] = [
  {
    id: 1,
    name: "Hoiki Sushi",
    image:
      "https://institucional.ifood.com.br/wp-content/uploads/2023/10/iFN_comidajaponesa-1024x692-1.webp",
    type: "Japonesa • Especialidades do Chef",
    products: [
      {
        id: 101,
        name: "Combinado Premium",
        description:
          "36 peças de sushis variados incluindo sashimis de salmão, atum e peixe branco, uramakis, niguiris e hossomakis.",
        price: 89.9,
        image:
          "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg",
      },
      {
        id: 102,
        name: "Temaki Salmão",
        description:
          "Temaki recheado com salmão fresco, cream cheese e cebolinha, envolto em alga nori crocante.",
        price: 28.9,
        image:
          "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg",
      },
      {
        id: 103,
        name: "Hot Philadelphia",
        description:
          "Uramaki empanado e frito recheado com salmão, cream cheese e cebolinha. Acompanha molho tarê.",
        price: 32.9,
        image:
          "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
      },
      {
        id: 104,
        name: "Sashimi de Salmão",
        description:
          "10 fatias de salmão fresco premium, corte tradicional, servido com molho shoyu e wasabi.",
        price: 39.9,
        image:
          "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
      },
      {
        id: 105,
        name: "Yakisoba de Carne",
        description:
          "Macarrão oriental salteado com tiras de carne, legumes frescos e molho especial da casa.",
        price: 42.9,
        image:
          "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
      },
      {
        id: 106,
        name: "Teppanyaki de Camarão",
        description:
          "Camarões grelhados ao estilo teppanyaki com legumes, servidos com molho teriyaki e arroz japonês.",
        price: 59.9,
        image:
          "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
      },
    ],
  },
  {
    id: 2,
    name: "La Dolce Vita Gastronomia",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    type: "Italiana • Massas Artesanais",
    products: [
      {
        id: 201,
        name: "Spaghetti alla Carbonara",
        description:
          "Massa fresca com molho de ovos, queijo pecorino, pimenta preta e pancetta.",
        price: 45.9,
        image:
          "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
      },
      {
        id: 202,
        name: "Lasagna Bolognese",
        description:
          "Camadas de massa intercaladas com molho bolonhesa, bechamel e queijos.",
        price: 48.9,
        image:
          "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg",
      },
      {
        id: 203,
        name: "Risotto ai Funghi",
        description:
          "Arroz arbóreo cremoso com mix de cogumelos frescos, manteiga e queijo parmesão.",
        price: 52.9,
        image:
          "https://images.pexels.com/photos/5639411/pexels-photo-5639411.jpeg",
      },
      {
        id: 204,
        name: "Pizza Margherita",
        description:
          "Massa fina e crocante coberta com molho de tomate caseiro, mussarela de búfala e manjericão fresco.",
        price: 42.9,
        image:
          "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg",
      },
      {
        id: 205,
        name: "Fettuccine Alfredo",
        description:
          "Massa larga ao molho cremoso de queijo, manteiga e noz-moscada finalizadas com parmesão.",
        price: 46.9,
        image:
          "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
      },
      {
        id: 206,
        name: "Ravioli de Abóbora",
        description:
          "Massa recheada com abóbora e queijo ricota, servida com manteiga de sálvia e amêndoas tostadas.",
        price: 49.9,
        image:
          "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg",
      },
    ],
  },
  {
    id: 3,
    name: "Sabor de México",
    image: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg",
    type: "Mexicana • Picante",
    products: [
      {
        id: 301,
        name: "Tacos de Carne Asada",
        description:
          "Três tacos de milho com carne bovina marinada e grelhada, cebola, coentro e guacamole fresco.",
        price: 36.9,
        image:
          "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
      },
      {
        id: 302,
        name: "Burrito Supreme",
        description:
          "Tortilla de farinha recheada com arroz, feijão, frango desfiado, queijo, pico de gallo e creme azedo.",
        price: 38.9,
        image:
          "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      },
      {
        id: 303,
        name: "Nachos Fiesta",
        description:
          "Tortillas crocantes cobertas com queijo derretido, guacamole, jalapeños, pico de gallo e carne moída temperada.",
        price: 42.9,
        image:
          "https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg",
      },
      {
        id: 304,
        name: "Quesadillas de Frango",
        description:
          "Tortillas de farinha recheadas com frango desfiado, queijo derretido e pimenta, servidas com guacamole.",
        price: 34.9,
        image:
          "https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg",
      },
      {
        id: 305,
        name: "Enchiladas Verdes",
        description:
          "Tortillas recheadas com frango, cobertas com molho verde de tomatillo, creme azedo e queijo.",
        price: 39.9,
        image:
          "https://images.pexels.com/photos/5737377/pexels-photo-5737377.jpeg",
      },
      {
        id: 306,
        name: "Fajitas Mistas",
        description:
          "Tiras de carne bovina e frango grelhadas com pimentões e cebolas, servidas com tortillas, guacamole e arroz mexicano.",
        price: 48.9,
        image:
          "https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg",
      },
    ],
  },
  {
    id: 4,
    name: "Casa do Churrasco",
    image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    type: "Brasileira • Churrascaria",
    products: [
      {
        id: 401,
        name: "Picanha Premium",
        description:
          "300g de picanha nobre grelhada no ponto, acompanha arroz, farofa, vinagrete e mandioca frita.",
        price: 69.9,
        image:
          "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg",
      },
      {
        id: 402,
        name: "Costela no Bafo",
        description:
          "Costela bovina assada lentamente, extremamente macia, acompanha arroz carreteiro e farofa.",
        price: 62.9,
        image:
          "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
      },
      {
        id: 403,
        name: "Linguiça Cuiabana",
        description:
          "Linguiça artesanal grelhada, acompanha mandioca cozida, vinagrete e farofa crocante.",
        price: 39.9,
        image:
          "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg",
      },
      {
        id: 404,
        name: "Cupim na Brasa",
        description:
          "Cupim assado lentamente, macio e suculento, servido com arroz, feijão tropeiro e pão de alho.",
        price: 54.9,
        image:
          "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg",
      },
      {
        id: 405,
        name: "Fraldinha com Chimichurri",
        description:
          "300g de fraldinha grelhada, servida com molho chimichurri caseiro, batatas rústicas e legumes grelhados.",
        price: 59.9,
        image:
          "https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg",
      },
      {
        id: 406,
        name: "Rodízio Completo (por pessoa)",
        description:
          "12 cortes nobres de carnes servidos à vontade, acompanha buffet completo de saladas e guarnições.",
        price: 89.9,
        image:
          "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg",
      },
    ],
  },
  {
    id: 5,
    name: "Aroma do Líbano",
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg",
    type: "Árabe • Comida Saudável",
    products: [
      {
        id: 501,
        name: "Combo Shawarma",
        description:
          "Shawarma de carne com pão sírio, tahine, homus, tabule e batata frita temperada com zaatar.",
        price: 44.9,
        image:
          "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
      },
      {
        id: 502,
        name: "Kafta no Espeto",
        description:
          "Dois espetos de carne moída temperada com especiarias, servidos com arroz com lentilhas e homus.",
        price: 49.9,
        image:
          "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
      },
      {
        id: 503,
        name: "Mezze Completo",
        description:
          "Degustação com homus, babaganoush, tabule, coalhada seca, azeitonas temperadas e pão sírio.",
        price: 52.9,
        image:
          "https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg",
      },
      {
        id: 504,
        name: "Falafel",
        description:
          "Seis unidades de bolinhos de grão-de-bico fritos, servidos com molho tahine, picles e salada.",
        price: 32.9,
        image:
          "https://images.pexels.com/photos/1618901/pexels-photo-1618901.jpeg",
      },
      {
        id: 505,
        name: "Kibbeh Frito",
        description:
          "Cinco unidades de quibe frito recheado com carne moída e pinoli, acompanha molho de yogurte com hortelã.",
        price: 36.9,
        image:
          "https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg",
      },
      {
        id: 506,
        name: "Baklava",
        description:
          "Sobremesa tradicional de massa folhada com nozes e calda de mel perfumada com água de flor de laranjeira.",
        price: 28.9,
        image:
          "https://images.pexels.com/photos/13385492/pexels-photo-13385492.jpeg",
      },
    ],
  },
  {
    id: 6,
    name: "Jardim Verde",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    type: "Vegana • Orgânica",
    products: [
      {
        id: 601,
        name: "Bowl de Buddha",
        description:
          "Mix de grãos, legumes orgânicos, abacate, tofu defumado e molho de tahine com limão.",
        price: 39.9,
        image:
          "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
      },
      {
        id: 602,
        name: "Hambúrguer de Grão de Bico",
        description:
          "Hambúrguer artesanal de grão de bico com especiarias, pão integral, alface, tomate e maionese vegana.",
        price: 34.9,
        image:
          "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg",
      },
      {
        id: 603,
        name: "Lasanha de Berinjela",
        description:
          "Camadas de berinjela, tomate, abobrinha e molho branco vegano gratinado com queijo vegetal.",
        price: 42.9,
        image:
          "https://images.pexels.com/photos/6531786/pexels-photo-6531786.jpeg",
      },
      {
        id: 604,
        name: "Pizza Vegana",
        description:
          "Massa integral coberta com molho de tomate caseiro, legumes assados, cogumelos e queijo vegetal.",
        price: 46.9,
        image:
          "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg",
      },
      {
        id: 605,
        name: "Wrap de Falafel",
        description:
          "Wrap integral recheado com falafel, homus, vegetais frescos e molho de iogurte vegetal.",
        price: 32.9,
        image:
          "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg",
      },
      {
        id: 606,
        name: "Smoothie Bowl",
        description:
          "Base cremosa de açaí e frutas vermelhas, coberta com granola caseira, banana, frutas frescas e mel de agave.",
        price: 28.9,
        image:
          "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
      },
    ],
  },
];
