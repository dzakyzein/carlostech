import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// LandingPage
import Home from './Pages/Landingpage/Home';
import About from './Pages/Landingpage/About';
import Service from './Pages/Landingpage/Servicepage/Service';
import Login from './Pages/Loginpage/Login';
import Register from './Pages/Signuppage/Signup';

// AdminPage
import Loader from './Pages/Adminpage/common/Loader/Loader';
import PageTitle from './Pages/Adminpage/components/PageTitle';
import SignIn from './Pages/Adminpage/pages/Authentication/SignIn';
import SignUp from './Pages/Adminpage/pages/Authentication/SignUp';
import Calendar from './Pages/Adminpage/pages/Calendar';
import Chart from './Pages/Adminpage/pages/Chart';
import Dashboard from './Pages/Adminpage/pages/Dashboard/Dashboard';
import FormElements from './Pages/Adminpage/pages/Form/FormElements';
import FormLayout from './Pages/Adminpage/pages/Form/FormLayout';
import Profile from './Pages/Adminpage/pages/Profile';
import Settings from './Pages/Adminpage/pages/Settings';
import Tables from './Pages/Adminpage/pages/Tables';
import Alerts from './Pages/Adminpage/pages/UiElements/Alerts';
import Buttons from './Pages/Adminpage/pages/UiElements/Buttons';

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
        path='/admin/forms/form-elements'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Form Elements' />
            <FormElements />
          </>
        }
      />
      <Route
        path='/admin/forms/form-layout'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Form Layout' />
            <FormLayout />
          </>
        }
      />
      <Route
        path='/admin/tables'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Tables' />
            <Tables />
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
        path='/admin/ui/alerts'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Alerts' />
            <Alerts />
          </>
        }
      />
      <Route
        path='/admin/ui/buttons'
        element={
          <>
            <PageTitle title='Carlos Tech Admin | Buttons' />
            <Buttons />
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
