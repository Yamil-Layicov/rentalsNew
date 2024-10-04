import Buildings from "../pages/buildings/Buildings";
import Error from "../pages/error/Error";
import HomeLayout from "../pages/homeLayout/HomeLayout";
import Login from "../pages/login/Login";
import Map from "../pages/map/Map";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "binalar",
        element: <Buildings />,
      },
      {
        path: "xerite",
        element: <Map />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
