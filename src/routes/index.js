import Home from "./Home";
import Register from "./Auth/Register";
import Products from "./Products";

const App__Routes = [
  {
    id: 0,
    link: "/",
    component: <Home />,
  },
  {
    id: 1,
    link: "/register",
    component: <Register />,
  },
  {
    id: 3,
    link: "/products",
    component: <Products />,
  },
];
export default App__Routes;