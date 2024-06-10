import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Loader from './Pages/Adminpage/common/Loader/Loader';

// LandingPage
import Home from './Pages/Landingpage/Home';
import About from './Pages/Landingpage/About';
import Service from './Pages/Landingpage/Servicepage/Service';
import Login from './Pages/Loginpage/Login';
import Register from './Pages/Signuppage/Register';

// AdminPage
import PageTitle from './Pages/Adminpage/components/PageTitle';
import SignIn from './Pages/Adminpage/pages/Authentication/SignIn';
import SignUp from './Pages/Adminpage/pages/Authentication/SignUp';
import Calendar from './Pages/Adminpage/pages/Calendar';
import Chart from './Pages/Adminpage/pages/Chart';
import Dashboard from './Pages/Adminpage/pages/Dashboard';
import Profile from './Pages/Adminpage/pages/Profile';
import Settings from './Pages/Adminpage/pages/Settings';
import Product from './Pages/Adminpage/pages/Product';
import User from './Pages/Adminpage/pages/User';

const App = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Loader effect on route change
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutId); // Cleanup on unmount or pathname change
  }, [pathname]);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Landing Pages */}
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Admin Pages */}
      <Route
        path='/admin'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Dashboard' />
            <Dashboard />
          </>
        }
      />
      <Route
        path='/admin/calendar'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Calendar' />
            <Calendar />
          </>
        }
      />
      <Route
        path='/admin/profile'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Profile' />
            <Profile />
          </>
        }
      />
      <Route
        path='/admin/user'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | User' />
            <User />
          </>
        }
      />
      <Route
        path='/admin/product'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Product' />
            <Product />
          </>
        }
      />
      <Route
        path='/admin/settings'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Settings' />
            <Settings />
          </>
        }
      />
      <Route
        path='/admin/chart'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Chart' />
            <Chart />
          </>
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
  );
};

export default App;
