import Home from "./pages/Home";
import Restaurants from "./pages/Restaurantes";
import GlobalStyle from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurante/:id",
    element: <Restaurants />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <RouterProvider router={rotas} />
      </div>
    </>
  );
}

export default App;
