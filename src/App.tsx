import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider, { useAuth } from "./providers/AuthProvider";
import { ROUTES } from "./constants/route";
const Home = lazy(() => import("./routes/Home"));
const Cars = lazy(() => import("./routes/Cars"));
const Users = lazy(() => import("./routes/Users"));
const Login = lazy(() => import("./routes/Login"));
const CarsAvailable = lazy(() => import("./routes/CarsAvailable"));
const ProtectedRoute = ({ children }: any) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};
function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route
              path={ROUTES.HOME}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.CARS}
              element={
                <ProtectedRoute>
                  <Cars />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.USERS}
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.CARS_AVAILABLE}
              element={
                <ProtectedRoute>
                  <CarsAvailable />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
