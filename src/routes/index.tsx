import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../page/NotFound";
import Home from "../page/Home";
import Login from "../page/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
  ]);

export default router;