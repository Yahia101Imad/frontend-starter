import Landing from "../pages/marketing/Landing";
import Pricing from "../pages/marketing/Pricing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";

import MarketingLayout from "../layouts/MarketingLayout";
import AuthLayout from "../layouts/AuthLayout";

export const routes = [
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        index: true,
        element: <Pricing />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
];