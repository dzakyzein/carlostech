/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './Pages/Adminpage/common/Loader/Loader';

// Route
import ProtectedRoute from './Routes/ProtectedRoute';
import { AuthProvider } from './Routes/AuthContext';

// LandingPage
import Home from './Pages/Landingpage/Home';
import About from './Pages/Landingpage/About';
import Service from './Pages/Landingpage/ServicePage/Service';
import Login from './Pages/Loginpage/Login';
import Register from './Pages/Signuppage/Register';
import LPProfile from './Pages/Landingpage/ProfilePage/Profile';

// AdminPage
import PageTitle from './Pages/Adminpage/components/PageTitle';
import Calendar from './Pages/Adminpage/pages/Calendar';
import Chart from './Pages/Adminpage/pages/Chart';
import Dashboard from './Pages/Adminpage/pages/Dashboard';
import Profile from './Pages/Adminpage/pages/Profile';
import Product from './Pages/Adminpage/pages/Sale';
import User from './Pages/Adminpage/pages/User';
import Sale from './Pages/Adminpage/pages/Sale';

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
            path='/admin/calendar'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | Calendar' />
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/profile'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | Profile' />
                <Profile />
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
          <Route
            path='/admin/chart'
            element={
              <ProtectedRoute requiredRole='admin'>
                <PageTitle title='Carlos Tech Admin | Chart' />
                <Chart />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </AuthProvider>
  );
};

export default App;
