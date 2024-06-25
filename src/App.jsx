// App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Loader from './Pages/Adminpage/common/Loader/Loader';

// Route
import { AuthProvider } from './Utils/AuthContext';
import PrivateRoute from './Utils/PrivateRoute';

// LandingPage
import Home from './Pages/Landingpage/Home';
import About from './Pages/Landingpage/About';
import Service from './Pages/Landingpage/Servicepage/Service';
import Login from './Pages/Loginpage/Login';
import Register from './Pages/Signuppage/Register';
import LPProfile from './Pages/Landingpage/ProfilePage/Profile';

// AdminPage
import PageTitle from './Pages/Adminpage/components/PageTitle';
import SignIn from './Pages/Adminpage/pages/Authentication/SignIn';
import SignUp from './Pages/Adminpage/pages/Authentication/SignUp';
import Calendar from './Pages/Adminpage/pages/Calendar';
import Chart from './Pages/Adminpage/pages/Chart';
import Dashboard from './Pages/Adminpage/pages/Dashboard';
import Profile from './Pages/Adminpage/pages/Profile';
import Product from './Pages/Adminpage/pages/Product';
import User from './Pages/Adminpage/pages/User';

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

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <Routes>
        {/* Landing Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<LPProfile />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Admin Pages */}
        <Route
          path='/admin'
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title='Carlos Tech Admin | Dashboard' />
                  <Dashboard />
                </>
              }
            />
          }
        />
        <Route
          path='/admin/calendar'
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title='Carlos Tech Admin | Calendar' />
                  <Calendar />
                </>
              }
            />
          }
        />
        <Route
          path='/admin/profile'
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title='Carlos Tech Admin | Profile' />
                  <Profile />
                </>
              }
            />
          }
        />
        <Route
          path='/admin/user'
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title='Carlos Tech Admin | User' />
                  <User />
                </>
              }
            />
          }
        />
        <Route
          path='/admin/product'
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title='Carlos Tech Admin | Product' />
                  <Product />
                </>
              }
            />
          }
        />
        <Route
          path='/admin/chart'
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title='Carlos Tech Admin | Chart' />
                  <Chart />
                </>
              }
            />
          }
        />
        <Route
          path='/admin/auth/signin'
          element={
            <>
              <PageTitle title='Carlos Tech Admin | Sign in' />
              <SignIn />
            </>
          }
        />
        <Route
          path='/admin/auth/signup'
          element={
            <>
              <PageTitle title='Carlos Tech Admin | Sign out' />
              <SignUp />
            </>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
