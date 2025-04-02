import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
