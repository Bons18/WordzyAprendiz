import Feedback from "./features/Feedback/pages/Feedback"
import Ranking from "./features/Ranking/pages/Ranking"
import LoginPage from "./features/Auth/pages/LoginPage"
import Home from "./features/Dashboard/pages/Inicio";

// Definición de rutas
const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Inicio",
    element: <Home />,
  },
  {
    path: "/Ranking",
    element: <Ranking />,
  },
  {
    path: "/Retroalimentacion",
    element: <Feedback />,
  },
]

export default routes

