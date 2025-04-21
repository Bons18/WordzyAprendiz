import Feedback from "./features/Feedback/pages/Feedback"
import Ranking from "./features/Ranking/pages/Ranking"
import Dashboard from "./features/Dashboard/pages/Inicio";
import LoginPage from "./features/Auth/pages/LoginPage"

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
    element: <Dashboard />,
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

