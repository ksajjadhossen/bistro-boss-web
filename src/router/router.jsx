import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/contact", element: <h1>Contact</h1> },
      { path: "/dashboard", element: <h1>Dashboard</h1> },
      { path: "/ourMenu", element: <Menu></Menu> },
      { path: "/ourShop", element: <OurShop></OurShop> },
      { path: "/signIn", element: <h1>sign in</h1> },
    ],
  },
]);

export default router;
