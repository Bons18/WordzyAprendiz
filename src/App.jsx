import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./shared/components/Navbar"
import routes from "./routes"
import { useAuth } from "./features/auth/hooks/useAuth"
import { Navigate } from "react-router-dom"

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {isAuthenticated && <Navbar />}
        <div className={`flex-1 overflow-auto ${!isAuthenticated ? 'w-full' : ''}`}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.path === "/" || route.path === "/login" ? (
                    isAuthenticated ? (
                      <Navigate to="/Inicio" />
                    ) : (
                      route.element
                    )
                  ) : isAuthenticated ? (
                    route.element
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

