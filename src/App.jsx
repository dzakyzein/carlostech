// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./pages/adminpage/common/Loader/Loader";

// Route
import ProtectedRoute from "./Routes/ProtectedRoute";
import { AuthProvider } from "./Routes/AuthContext";

// LandingPage
import Home from "./pages/landingpage/Home";
import About from "./pages/landingpage/About";
import Register from "./pages/signuppage/Register";
import LPProfile from "./pages/landingpage/profilepage/Profile";

// AdminPage
import PageTitle from "./pages/adminpage/components/PageTitle";
import Dashboard from "./pages/adminpage/pages/Dashboard";
import Tool from "./pages/adminpage/pages/Tool";
import User from "./pages/adminpage/pages/User";
import Sale from "./pages/adminpage/pages/Sale";
import Service from "./pages/landingpage/servicepage/Service";
import Login from "./pages/loginpage/Login";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <AuthProvider>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          {/* Landing Pages */}
          <Route path='/' element={<Home />} />
          <Route
            path='/service'
            element={
              <ProtectedRoute requiredRole='customer'>
                {<Service />}
              </ProtectedRoute>
            }
          />
          <Route path='/about' element={<About />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute requiredRole='customer'>
                {<LPProfile />}
              </ProtectedRoute>
            }
          />
          <Route
            path='/login'
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path='/register'
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          ></Route>
          {/* Admin Pages */}
          <Route
            path='/admin'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | Dashboard' />
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/tool'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | Tool' />
                <Tool />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/user'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | User' />
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/sale'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | Sale' />
                <Sale />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </AuthProvider>
  );
};

export default App;
